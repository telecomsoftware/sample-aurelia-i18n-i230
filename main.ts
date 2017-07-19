import { I18N, Backend, TCustomAttribute } from 'aurelia-i18n';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-i18n', (instance) => {
            let aliases = ['t', 'i18n'];
            TCustomAttribute.configureAliases(aliases);
            return instance.setup({
                lng: 'en',
                attributes: aliases,
                fallbackLng: 'en',
                ns: ['client'],
                defaultNS: 'client',
                debug: false
            });
        });

    aurelia.start().then((aurelia) => {
        aurelia.setRoot();
    })
}