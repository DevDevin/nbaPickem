const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const app = express();


// variables
let homeFinalScore, awayFinalScore;
let body;
const nbaURL = "https://api.fantasydata.net/v3/nba/stats/JSON/TeamSeasonStats/2017?key=ae39a145c18f48ffa20af46658e54b7d";
let homeTeamID = 1;
let awayTeamID = 1;
let home_fgPct;
let homeTeamName, awayTeamName;






app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Data passing from the user
app.post('/api/form', (req, res) => {

  // homeTeamID = req.body.homeTeam;
  // homeTeamID = '1';
  homeTeamName = req.body.teams.homeTeam;
  awayTeamName = req.body.teams.awayTeam;

/// home team switch statement ///
  switch(homeTeamName) {
    case 'Atlanta Hawks':
            homeTeamID = '0';
            break;
    case 'Brooklyn Nets':
            homeTeamID = '1';
            break;
    case 'Boston Celtics':
            homeTeamID = '2';
            break;
    case 'Charlotte Hornets':
            homeTeamID = '3';
            break;
    case 'Chicago Bulls':
            homeTeamID = '4';
            break;
    case 'Cleveland Cavaliers':
            homeTeamID = '5';
            break;
    case 'Dallas Mavericks':
            homeTeamID = '6';
            break;
    case 'Denver Nuggets':
            homeTeamID = '7';
            break;
    case 'Detroit Pistons':
            homeTeamID = '8';
            break;
    case 'Golden State Warriors':
            homeTeamID = '9';
            break;
    case 'Houston Rockets':
            homeTeamID = '10';
            break;
    case 'Indiana Pacers':
            homeTeamID = '11';
            break;
    case 'Los Angeles Clippers':
            homeTeamID = '12';
            break;
    case 'Los Angeles Lakers':
            homeTeamID = '13';
            break;
    case 'Memphis Grizzlies':
            homeTeamID = '14';
            break;
    case 'Miami Heat':
            homeTeamID = '15';
            break;
    case 'Milwaukee Bucks':
            homeTeamID = '16';
            break;
    case 'Minnesota Timberwolves':
            homeTeamID = '17';
            break;
    case 'New Orleans Pelicans':
            homeTeamID = '18';
            break;
    case 'New York Knicks':
            homeTeamID = '19';
            break;
    case 'Oklahoma City Thunder':
            homeTeamID = '20';
            break;
    case 'Orlando Magic':
            homeTeamID = '21';
            break;
    case 'Philadelphia 76ers':
            homeTeamID = '22';
            break;
    case 'Phoenix Suns':
            homeTeamID = '23';
            break;
    case 'Portland Trail Blazers':
            homeTeamID = '24';
            break;
    case 'San Antonio Spurs':
            homeTeamID = '25';
            break;
    case 'Sacramento Kings':
            homeTeamID = '26';
            break;
    case 'Toronto Raptors':
            homeTeamID = '27';
            break;
    case 'Utah Jazz':
            homeTeamID = '28';
            break;
    case 'Washington Wizards':
            homeTeamID = '29';
            break;
    default:
        homeTeamID = '0';
}

/// away team switch statment ///
switch(awayTeamName) {
  case 'Atlanta Hawks':
          awayTeamID = '0';
          break;
  case 'Brooklyn Nets':
          awayTeamID = '1';
          break;
  case 'Boston Celtics':
          awayTeamID = '2';
          break;
  case 'Charlotte Hornets':
          awayTeamID = '3';
          break;
  case 'Chicago Bulls':
          awayTeamID = '4';
          break;
  case 'Cleveland Cavaliers':
          awayTeamID = '5';
          break;
  case 'Dallas Mavericks':
          awayTeamID = '6';
          break;
  case 'Denver Nuggets':
          awayTeamID = '7';
          break;
  case 'Detroit Pistons':
          awayTeamID = '8';
          break;
  case 'Golden State Warriors':
          awayTeamID = '9';
          break;
  case 'Houston Rockets':
          awayTeamID = '10';
          break;
  case 'Indiana Pacers':
          awayTeamID = '11';
          break;
  case 'Los Angeles Clippers':
          awayTeamID = '12';
          break;
  case 'Los Angeles Lakers':
          awayTeamID = '13';
          break;
  case 'Memphis Grizzlies':
          awayTeamID = '14';
          break;
  case 'Miami Heat':
          awayTeamID = '15';
          break;
  case 'Milwaukee Bucks':
          awayTeamID = '16';
          break;
  case 'Minnesota Timberwolves':
          awayTeamID = '17';
          break;
  case 'New Orleans Pelicans':
          awayTeamID = '18';
          break;
  case 'New York Knicks':
          awayTeamID = '19';
          break;
  case 'Oklahoma City Thunder':
          awayTeamID = '20';
          break;
  case 'Orlando Magic':
          awayTeamID = '21';
          break;
  case 'Philadelphia 76ers':
          awayTeamID = '22';
          break;
  case 'Phoenix Suns':
          awayTeamID = '23';
          break;
  case 'Portland Trail Blazers':
          awayTeamID = '24';
          break;
  case 'San Antonio Spurs':
          awayTeamID = '25';
          break;
  case 'Sacramento Kings':
          awayTeamID = '26';
          break;
  case 'Toronto Raptors':
          awayTeamID = '27';
          break;
  case 'Utah Jazz':
          awayTeamID = '28';
          break;
  case 'Washington Wizards':
          awayTeamID = '29';
          break;
  default:
      awayTeamID = '0';
}

  console.log('>>>>>>>>req.body<<<<<<<<<: ',req.body);
  console.log('>>>>>>>>Home Team ID <<<<<<<<<: ',homeTeamID);
  console.log('>>>>>>>>Away Team ID <<<<<<<<<: ',awayTeamID);

  request ({
        url: nbaURL,
        json: true
    }, function (error, response, body) {

        // console.log(body[1]);


        /////////////////  HOME variables ///////////////////////////////
        homeTeamName = body[homeTeamID].Name;
        home_fgPct = Math.round(body[homeTeamID].FieldGoalsPercentage);
        home_threePct = body[homeTeamID].ThreePointersPercentage;
        home_ftPct = body[homeTeamID].FreeThrowsPercentage;
        home_OR = Math.round(body[homeTeamID].OffensiveRebounds / (body[homeTeamID].Games));
        home_ast = Math.round(body[homeTeamID].Assists / body[homeTeamID].Games);
        home_DR = Math.round(body[homeTeamID].DefensiveRebounds / body[homeTeamID].Games);
        home_PF = Math.round(body[homeTeamID].PersonalFouls / body[homeTeamID].Games);
        home_stl = Math.round(body[homeTeamID].Steals / body[homeTeamID].Games);
        home_blk = Math.round(body[homeTeamID].BlockedShots / body[homeTeamID].Games);
        home_trnOvrs = Math.round(body[homeTeamID].Turnovers / body[homeTeamID].Games);

        /////////////////////// AWAY VARIABLES //////////////////////////
        awayTeamName = body[awayTeamID].Name;
        away_fgPct = body[awayTeamID].FieldGoalsPercentage;
        away_threePct = body[awayTeamID].ThreePointersPercentage;
        away_ftPct = body[awayTeamID].FreeThrowsPercentage;
        away_OR = Math.round(body[awayTeamID].OffensiveRebounds / (body[awayTeamID].Games));
        away_ast = Math.round(body[awayTeamID].Assists / body[awayTeamID].Games);
        away_DR = Math.round(body[awayTeamID].DefensiveRebounds / body[awayTeamID].Games);
        away_PF = Math.round(body[awayTeamID].PersonalFouls / body[awayTeamID].Games);
        away_stl = Math.round(body[awayTeamID].Steals / body[awayTeamID].Games);
        away_blk = Math.round(body[awayTeamID].BlockedShots / body[awayTeamID].Games);
        away_trnOvrs = Math.round(body[awayTeamID].Turnovers / body[awayTeamID].Games);


        //////////////////// Printing out variables to test ///////////////////////
        /// home team variables ///
        console.log('Home FGPct: ', home_fgPct);
        console.log('Home ThreePct: ', home_threePct);
        console.log('Home FT Pct: ', home_ftPct);
        console.log('Home Offensive Rbs: ', home_OR); // doesn't like the decimals
        console.log('Home Assists: ', home_ast); // doesn't like the decimals
        console.log('Home Defensive Rbs: ', home_DR);
        console.log('Home Personal Fouls: ', home_PF);
        console.log('Home Steals: ', home_stl);
        console.log('Home Blocks: ', home_blk);
        console.log('Home Turnovers: ', home_trnOvrs);

        console.log('----------------------------');

        /// away team variables ///
        console.log('Away FGPct: ', away_fgPct);
        console.log('Away ThreePct: ', away_threePct);
        console.log('Away FT Pct: ', away_ftPct);
        console.log('Away Offensive Rbs: ', away_OR); // doesn't like the decimals
        console.log('Away Assists: ', away_ast); // doesn't like the decimals
        console.log('Away Defensive Rbs: ', away_DR);
        console.log('Away Personal Fouls: ', away_PF);
        console.log('Away Steals: ', away_stl);
        console.log('Away Blocks: ', away_blk);
        console.log('Away Turnovers: ', away_trnOvrs);







        if (!error && response.statusCode === 200) {
        }
    });



});

/////////////////////////////////////////// AWAY TEAM //////////////////////////////////////
app.post('/api/away', (req, res) => {

  awayTeamID = req.body.awayTeam;
  console.log('>>>>>>>>Away Team<<<<<<<<<: ',awayTeamID);

  request ({
        url: nbaURL,
        json: true
    }, function (error, response, body) {

        // console.log(body[1]);
        // console.log(body[h]);

        /////////////////  HOME variables ///////////////////////////////
        homeTeamName = body[homeTeamID].Name;
        console.log('home team name: ')
        home_fgPct = Math.round(body[homeTeamID].FieldGoalsPercentage);
        home_threePct = body[homeTeamID].ThreePointersPercentage;
        home_ftPct = body[homeTeamID].FreeThrowsPercentage;
        home_OR = Math.round(body[homeTeamID].OffensiveRebounds / (body[homeTeamID].Games));
        home_ast = Math.round(body[homeTeamID].Assists / body[homeTeamID].Games);
        home_DR = Math.round(body[homeTeamID].DefensiveRebounds / body[homeTeamID].Games);
        home_PF = Math.round(body[homeTeamID].PersonalFouls / body[homeTeamID].Games);
        home_stl = Math.round(body[homeTeamID].Steals / body[homeTeamID].Games);
        home_blk = Math.round(body[homeTeamID].BlockedShots / body[homeTeamID].Games);
        home_trnOvrs = Math.round(body[homeTeamID].Turnovers / body[homeTeamID].Games);

        /////////////////////// AWAY VARIABLES //////////////////////////
        awayTeamName = body[awayTeamID].Name;
        away_fgPct = body[awayTeamID].FieldGoalsPercentage;
        away_threePct = body[awayTeamID].ThreePointersPercentage;
        away_ftPct = body[awayTeamID].FreeThrowsPercentage;
        away_OR = Math.round(body[awayTeamID].OffensiveRebounds / (body[awayTeamID].Games));
        away_ast = Math.round(body[awayTeamID].Assists / body[awayTeamID].Games);
        away_DR = Math.round(body[awayTeamID].DefensiveRebounds / body[awayTeamID].Games);
        away_PF = Math.round(body[awayTeamID].PersonalFouls / body[awayTeamID].Games);
        away_stl = Math.round(body[awayTeamID].Steals / body[awayTeamID].Games);
        away_blk = Math.round(body[awayTeamID].BlockedShots / body[awayTeamID].Games);
        away_trnOvrs = Math.round(body[awayTeamID].Turnovers / body[awayTeamID].Games);


        //////////////////// Printing out variables to test ///////////////////////
        /// home team variables ///
        console.log('Home Name: ',homeTeamName)
        console.log('Home FGPct: ', home_fgPct);
        console.log('Home ThreePct: ', home_threePct);
        console.log('Home FT Pct: ', home_ftPct);
        console.log('Home Offensive Rbs: ', home_OR); // doesn't like the decimals
        console.log('Home Assists: ', home_ast); // doesn't like the decimals
        console.log('Home Defensive Rbs: ', home_DR);
        console.log('Home Personal Fouls: ', home_PF);
        console.log('Home Steals: ', home_stl);
        console.log('Home Blocks: ', home_blk);
        console.log('Home Turnovers: ', home_trnOvrs);

        console.log('----------------------------');

        /// away team variables ///
        console.log('Away FGPct: ', away_fgPct);
        console.log('Away ThreePct: ', away_threePct);
        console.log('Away FT Pct: ', away_ftPct);
        console.log('Away Offensive Rbs: ', away_OR); // doesn't like the decimals
        console.log('Away Assists: ', away_ast); // doesn't like the decimals
        console.log('Away Defensive Rbs: ', away_DR);
        console.log('Away Personal Fouls: ', away_PF);
        console.log('Away Steals: ', away_stl);
        console.log('Away Blocks: ', away_blk);
        console.log('Away Turnovers: ', away_trnOvrs);


        // realTeamName = body[9].Name;

        // console.log('this is the home team: ', realTeamName);




        if (!error && response.statusCode === 200) {
        }
    });



});

/// Team API and JSON body
app.get('/api/customers', (req, res) => {
  const teams = [
    {id: 1, name: 'Atlanta Hawks'},
    {id: 2, name: 'Brooklyn Nets'},
    {id: 3, name: 'Boston Celtics'},
    {id: 4, name: 'Charlotte Hornets'},
    {id: 5, name: 'Chicago Bulls'},
    {id: 6, name: 'Cleveland Cavaliers'},
    {id: 7, name: 'Dallas Mavericks'},
    {id: 8, name: 'Denver Nuggets'},
    {id: 9, name: 'Detroit Pistons'},
    {id: 10, name: 'Golden State Warriors'},
    {id: 11, name: 'Houston Rockets'},
    {id: 12, name: 'Indiana Pacers'},
    {id: 13, name: 'Los Angeles Clippers'},
    {id: 14, name: 'Los Angeles Lakers'},
    {id: 15, name: 'Memphis Grizzlies'},
    {id: 16, name: 'Miami Heat'},
    {id: 17, name: 'Milwaukee Bucks'},
    {id: 18, name: 'Minnesota Timberwolves'},
    {id: 19, name: 'New Orleans Pelicans'},
    {id: 20, name: 'New York Knicks'},
    {id: 21, name: 'Oklahoma City Thunder'},
    {id: 22, name: 'Orlando Magic'},
    {id: 23, name: 'Philadelphia 76ers'},
    {id: 24, name: 'Phoenix Suns'},
    {id: 25, name: 'Portland Trail Blazers'},
    {id: 26, name: 'San Antonio Spurs'},
    {id: 27, name: 'Sacramento Kings'},
    {id: 28, name: 'Toronto Raptors'},
    {id: 29, name: 'Utah Jazz'},
    {id: 30, name: 'Washington Wizards'},

  ];

  res.json(teams);
});

app.get('/api/go',(req, res) => {

  console.log('homeTeamID: ',homeTeamID);
  console.log('FGA Pct: ',home_fgPct);

///home team API/////
  var options = {
        method: 'POST',
        url: 'https://ussouthcentral.services.azureml.net/workspaces/362f15ffcea6420b88b7fd11ff16bb70/services/c578823502174ba087a5756b9e4a322b/execute',
        qs: {'api-version': '2.0', details: 'true'},
        headers:
            {
                'postman-token': '9b91dfa1-0cf6-0383-ec8f-6217f3f5763a',
                'cache-control': 'no-cache',
                authorization: 'Bearer AUuZAeXNjF44rFMkFsfHs3bcU2IrgnzCsE7RjOAQ/yFIpGNj/d07RJKD8dgL2W2kqrbKDQlxmXPHA3byDEt87Q==',
                'content-type': 'application/json'
            },
        body:
            {
                Inputs:
                    {
                        input1:
                            {
                                ColumnNames:
                                    ['TEAMS',
                                        'VENUE',
                                        'FinalPoints',
                                        'MIN',
                                        'FG',
                                        'FGA',
                                        'FGPct',
                                        '3P',
                                        '3PA',
                                        '3PPct',
                                        'FT',
                                        'FTA',
                                        'FTPct',
                                        'OR',
                                        'DR',
                                        'TOT',
                                        'A',
                                        'PF',
                                        'ST',
                                        'Turnovers',
                                        'BL',
                                        'PTS',
                                        'Column 22',
                                        'Opp_Name',
                                        'Opp_VENUE',
                                        'Opp_FinalPoints',
                                        'Opp_MIN',
                                        'Opp_FG',
                                        'Opp_FGA',
                                        'Opp_FGPct',
                                        'Opp_3P',
                                        'Opp_3PA',
                                        'Opp_3PPct',
                                        'Opp_FT',
                                        'Opp_FTA',
                                        'Opp_FTPct',
                                        'Opp_OR',
                                        'Opp_DR',
                                        'Opp_TOT',
                                        'Opp_A',
                                        'Opp_PF',
                                        'Opp_ST',
                                        'Opp_Turnovers',
                                        'Opp_BL',
                                        'Opp_PTS'],
                                Values:
                                    [['value',
                                        'value',
                                        '0',
                                        '0',
                                        '0',
                                        '0', // FGA
                                        home_fgPct.toString(), // FGPct
                                        '0',
                                        '0',
                                        home_threePct.toString(), // 3PPct
                                        '0',
                                        '0',
                                        home_ftPct.toString(), // FTPct
                                        home_OR.toString(), // OR
                                        home_DR.toString(), // DR
                                        '0',
                                        home_ast.toString(), // A
                                        home_PF.toString(), // PF
                                        home_stl.toString(), // ST
                                        home_trnOvrs.toString(), // Turnovers
                                        home_blk.toString(), // Blk
                                        '0',
                                        'value',
                                        'value',
                                        'value',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0',
                                        '0'],
                                        ['value',
                                            'value',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            'value',
                                            'value',
                                            'value',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0',
                                            '0']]
                            }
                    },
                GlobalParameters: {}
            },
        json: true
    };


//// away team API
    var awayScore = {
          method: 'POST',
          url: 'https://ussouthcentral.services.azureml.net/workspaces/362f15ffcea6420b88b7fd11ff16bb70/services/c578823502174ba087a5756b9e4a322b/execute',
          qs: {'api-version': '2.0', details: 'true'},
          headers:
              {
                  'postman-token': '9b91dfa1-0cf6-0383-ec8f-6217f3f5763a',
                  'cache-control': 'no-cache',
                  authorization: 'Bearer AUuZAeXNjF44rFMkFsfHs3bcU2IrgnzCsE7RjOAQ/yFIpGNj/d07RJKD8dgL2W2kqrbKDQlxmXPHA3byDEt87Q==',
                  'content-type': 'application/json'
              },
          body:
              {
                  Inputs:
                      {
                          input1:
                              {
                                  ColumnNames:
                                      ['TEAMS',
                                          'VENUE',
                                          'FinalPoints',
                                          'MIN',
                                          'FG',
                                          'FGA',
                                          'FGPct',
                                          '3P',
                                          '3PA',
                                          '3PPct',
                                          'FT',
                                          'FTA',
                                          'FTPct',
                                          'OR',
                                          'DR',
                                          'TOT',
                                          'A',
                                          'PF',
                                          'ST',
                                          'Turnovers',
                                          'BL',
                                          'PTS',
                                          'Column 22',
                                          'Opp_Name',
                                          'Opp_VENUE',
                                          'Opp_FinalPoints',
                                          'Opp_MIN',
                                          'Opp_FG',
                                          'Opp_FGA',
                                          'Opp_FGPct',
                                          'Opp_3P',
                                          'Opp_3PA',
                                          'Opp_3PPct',
                                          'Opp_FT',
                                          'Opp_FTA',
                                          'Opp_FTPct',
                                          'Opp_OR',
                                          'Opp_DR',
                                          'Opp_TOT',
                                          'Opp_A',
                                          'Opp_PF',
                                          'Opp_ST',
                                          'Opp_Turnovers',
                                          'Opp_BL',
                                          'Opp_PTS'],
                                  Values:
                                      [['value',
                                          'value',
                                          '0',
                                          '0',
                                          '0',
                                          '0', // FGA
                                          away_fgPct.toString(), // FGPct
                                          '0',
                                          '0',
                                          away_threePct.toString(), // 3PPct
                                          '0',
                                          '0',
                                          away_ftPct.toString(), // FTPct
                                          away_OR.toString(), // OR
                                          away_DR.toString(), // DR
                                          '0',
                                          away_ast.toString(), // A
                                          away_PF.toString(), // PF
                                          away_stl.toString(), // ST
                                          away_trnOvrs.toString(), // Turnovers
                                          away_blk.toString(), // Blk
                                          '0',
                                          'value',
                                          'value',
                                          'value',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0',
                                          '0'],
                                          ['value',
                                              'value',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              'value',
                                              'value',
                                              'value',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0',
                                              '0']]
                              }
                      },
                  GlobalParameters: {}
              },
          json: true
      };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        homeFinalScore = Math.round(body.Results.output1.value.Values[0][14]);

        console.log('home final score',homeFinalScore);
        console.log('----------------------------');
    });

    request(awayScore, function (error, response, body) {
        if (error) throw new Error(error);

        awayFinalScore = Math.round(body.Results.output1.value.Values[0][14]);

        console.log('away final score',awayFinalScore);
        console.log('----------------------------');
    });

    const bothScores = [
      {id: 1, homeScore: homeFinalScore},
      {id: 2, awayScore: awayFinalScore},
    ];

  // res.json(homeFinalScore);
  res.json(bothScores);


});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
