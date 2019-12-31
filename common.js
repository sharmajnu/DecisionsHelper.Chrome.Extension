(function (window) {

    if(!window.decisionsData) {
        window.decisionsData = {};
    }

    window.decisionsData.allHosts = [
        { name: 'Localhost', host: 'localhost', port: 44349 },
        { name: 'Develop', host: 'devapp.boarddecisions.com' },
        { name: 'Feature', host: 'feature.boarddecisions.com' },
        { name: 'Master', host: 'master.boarddecisions.com' }
    ];

    window.browser = window.browser || window.chrome;
    
})(window);
