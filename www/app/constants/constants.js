var url_base = 'http://localhost:3000';

var api = {
    user: {
        getById: url_base + '/user/',
        verifyLogin: url_base + '/user/login/'
    }
};
moment.lang('es', {
    relativeTime: {
        future: "en %s",
        past: "%s",
        s: "ahora",
        m: "1 minuto",
        mm: "%m minutos",
        h: "1 hora",
        hh: "%h horas",
        d: "1 día",
        dd: "%d días",
        M: "1 mes",
        MM: "%d meses",
        y: "1 año",
        yy: "%d años"
    }
});