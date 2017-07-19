import { I18N, Backend, TCustomAttribute } from 'aurelia-i18n';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-i18n', (instance) => {
            let aliases = ['t', 'i18n'];
            TCustomAttribute.configureAliases(aliases);
            instance.i18next.use(Backend.with(aurelia.loader));
            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json'
                },
                lng: 'en',
                attributes: aliases,
                fallbackLng: 'en',
                ns: ['client'],
                defaultNS: 'client',
                debug: true
            });
        });

    aurelia.start().then((aurelia) => {
        aurelia.setRoot();
    })
}