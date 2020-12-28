'use strict';

import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    name: 'Sudoku',
    continue: 'Continue ',
    restart: 'Restart  ',
    newgame: 'New Game ',
    weekrank: 'Week Rank',
    norecord: 'No records yet',
    onlinerank: 'Online Rank',
    rank: 'You are at %{rank}',

    ok: 'Got it',
    congrats: 'Congrats',
    nosolve: 'No solve after this move',
    wrong :'Wrong Move',
    success: 'You solve this game in\n',
    fail: 'You lose this game.',
    errormove: '%{error} worng move(Only 3 allowed)',
    newrecord: 'New record! You solve this game in\n',

    uploadrecord: 'Send you record to the server?',
    uploadmessage: 'You have to upload your record to view the online rank',
    reject: 'Reject',
    grant: 'Grant',
    loading: 'loading……',
    error: 'Error',
    uplaoderror: 'Upload failed',
    queryerror: 'Query failed',

    share: 'Share',
    sharemessage: 'Sudoku Master - for pure sudoku pleasure',
    sharefailed: 'Share faild',

    rate: 'Rate this app',
    ratemessage: 'Rate Us On PlayStore',
    cancel: 'Cancel',
    confirm: 'Confrim',
  }
  
};

export default I18n;