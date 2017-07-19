SystemJS.config({
    paths: {
        "npm:": "jspm_packages/npm/",
        "github:": "jspm_packages/github/",
    },
    transpiler: false,
    warnings: true,
    browserConfig: {
        "baseURL": "/"
    },
    packages: {
        "": {
            "defaultExtension": "js"
        }
    },
    map: {
        "kendo.culture.en-GB.min": "lib/kendo/cultures/kendo.culture.en-GB.min.js",
        "kendo.messages.en-GB.min": "lib/kendo/messages/kendo.messages.en-GB.min.js",
        "kendo.autocomplete.min": "lib/kendo/kendo.autocomplete.min.js",
        "kendo.binder.min": "lib/kendo/kendo.binder.min.js",
        "kendo.button.min": "lib/kendo/kendo.button.min.js",
        "kendo.calendar.min": "lib/kendo/kendo.calendar.min.js",
        "kendo.color.min": "lib/kendo/kendo.color.min.js",
        "kendo.colorpicker.min": "lib/kendo/kendo.colorpicker.min.js",
        "kendo.columnmenu.min": "lib/kendo/kendo.columnmenu.min.js",
        "kendo.columnsorter.min": "lib/kendo/kendo.columnsorter.min.js",
        "kendo.combobox.min": "lib/kendo/kendo.combobox.min.js",
        "kendo.core.min": "lib/kendo/kendo.core.min.js",
        "kendo.data.min": "lib/kendo/kendo.data.min.js",
        "kendo.data.odata.min": "lib/kendo/kendo.data.odata.min.js",
        "kendo.data.signalr.min": "lib/kendo/kendo.data.signalr.min.js",
        "kendo.data.xml.min": "lib/kendo/kendo.data.xml.min.js",
        "kendo.datepicker.min": "lib/kendo/kendo.datepicker.min.js",
        "kendo.datetimepicker.min": "lib/kendo/kendo.datetimepicker.min.js",
        "kendo.dialog.min": "lib/kendo/kendo.dialog.min.js",
        "kendo.dom.min": "lib/kendo/kendo.dom.min.js",
        "kendo.draganddrop.min": "lib/kendo/kendo.draganddrop.min.js",
        "kendo.dropdownlist.min": "lib/kendo/kendo.dropdownlist.min.js",
        "kendo.editable.min": "lib/kendo/kendo.editable.min.js",
        "kendo.excel.min": "lib/kendo/kendo.excel.min.js",
        "kendo.filebrowser.min": "lib/kendo/kendo.filebrowser.min.js",
        "kendo.filtercell.min": "lib/kendo/kendo.filtercell.min.js",
        "kendo.filtermenu.min": "lib/kendo/kendo.filtermenu.min.js",
        "kendo.fx.min": "lib/kendo/kendo.fx.min.js",
        "kendo.gantt.list.min": "lib/kendo/kendo.gantt.list.min.js",
        "kendo.gantt.timeline.min": "lib/kendo/kendo.gantt.timeline.min.js",
        "kendo.groupable.min": "lib/kendo/kendo.groupable.min.js",
        "kendo.imagebrowser.min": "lib/kendo/kendo.imagebrowser.min.js",
        "kendo.list.min": "lib/kendo/kendo.list.min.js",
        "kendo.listview.min": "lib/kendo/kendo.listview.min.js",
        "kendo.maskedtextbox.min": "lib/kendo/kendo.maskedtextbox.min.js",
        "kendo.mediaplayer.min": "lib/kendo/kendo.mediaplayer.min.js",
        "kendo.menu.min": "lib/kendo/kendo.menu.min.js",
        "kendo.mobile.actionsheet.min": "lib/kendo/kendo.mobile.actionsheet.min.js",
        "kendo.mobile.application.min": "lib/kendo/kendo.mobile.application.min.js",
        "kendo.mobile.button.min": "lib/kendo/kendo.mobile.button.min.js",
        "kendo.mobile.buttongroup.min": "lib/kendo/kendo.mobile.buttongroup.min.js",
        "kendo.mobile.collapsible.min": "lib/kendo/kendo.mobile.collapsible.min.js",
        "kendo.mobile.drawer.min": "lib/kendo/kendo.mobile.drawer.min.js",
        "kendo.mobile.listview.min": "lib/kendo/kendo.mobile.listview.min.js",
        "kendo.mobile.loader.min": "lib/kendo/kendo.mobile.loader.min.js",
        "kendo.mobile.modalview.min": "lib/kendo/kendo.mobile.modalview.min.js",
        "kendo.mobile.navbar.min": "lib/kendo/kendo.mobile.navbar.min.js",
        "kendo.mobile.pane.min": "lib/kendo/kendo.mobile.pane.min.js",
        "kendo.mobile.popover.min": "lib/kendo/kendo.mobile.popover.min.js",
        "kendo.mobile.scroller.min": "lib/kendo/kendo.mobile.scroller.min.js",
        "kendo.mobile.scrollview.min": "lib/kendo/kendo.mobile.scrollview.min.js",
        "kendo.mobile.shim.min": "lib/kendo/kendo.mobile.shim.min.js",
        "kendo.mobile.splitview.min": "lib/kendo/kendo.mobile.splitview.min.js",
        "kendo.mobile.switch.min": "lib/kendo/kendo.mobile.switch.min.js",
        "kendo.mobile.tabstrip.min": "lib/kendo/kendo.mobile.tabstrip.min.js",
        "kendo.mobile.view.min": "lib/kendo/kendo.mobile.view.min.js",
        "kendo.multiselect.min": "lib/kendo/kendo.multiselect.min.js",
        "kendo.notification.min": "lib/kendo/kendo.notification.min.js",
        "kendo.numerictextbox.min": "lib/kendo/kendo.numerictextbox.min.js",
        "kendo.ooxml.min": "lib/kendo/kendo.ooxml.min.js",
        "kendo.pager.min": "lib/kendo/kendo.pager.min.js",
        "kendo.panelbar.min": "lib/kendo/kendo.panelbar.min.js",
        "kendo.pivot.configurator.min": "lib/kendo/kendo.pivot.configurator.min.js",
        "kendo.pivot.fieldmenu.min": "lib/kendo/kendo.pivot.fieldmenu.min.js",
        "kendo.pivotgrid.min": "lib/kendo/kendo.pivotgrid.min.js",
        "kendo.popup.min": "lib/kendo/kendo.popup.min.js",
        "kendo.progressbar.min": "lib/kendo/kendo.progressbar.min.js",
        "kendo.reorderable.min": "lib/kendo/kendo.reorderable.min.js",
        "kendo.resizable.min": "lib/kendo/kendo.resizable.min.js",
        "kendo.responsivepanel.min": "lib/kendo/kendo.responsivepanel.min.js",
        "kendo.router.min": "lib/kendo/kendo.router.min.js",
        "kendo.scheduler.agendaview.min": "lib/kendo/kendo.scheduler.agendaview.min.js",
        "kendo.scheduler.dayview.min": "lib/kendo/kendo.scheduler.dayview.min.js",
        "kendo.scheduler.monthview.min": "lib/kendo/kendo.scheduler.monthview.min.js",
        "kendo.scheduler.recurrence.min": "lib/kendo/kendo.scheduler.recurrence.min.js",
        "kendo.scheduler.timelineview.min": "lib/kendo/kendo.scheduler.timelineview.min.js",
        "kendo.scheduler.view.min": "lib/kendo/kendo.scheduler.view.min.js",
        "kendo.selectable.min": "lib/kendo/kendo.selectable.min.js",
        "kendo.slider.min": "lib/kendo/kendo.slider.min.js",
        "kendo.sortable.min": "lib/kendo/kendo.sortable.min.js",
        "kendo.splitter.min": "lib/kendo/kendo.splitter.min.js",
        "kendo.tabstrip.min": "lib/kendo/kendo.tabstrip.min.js",
        "kendo.timepicker.min": "lib/kendo/kendo.timepicker.min.js",
        "kendo.timezones.min": "lib/kendo/kendo.timezones.min.js",
        "kendo.toolbar.min": "lib/kendo/kendo.toolbar.min.js",
        "kendo.tooltip.min": "lib/kendo/kendo.tooltip.min.js",
        "kendo.touch.min": "lib/kendo/kendo.touch.min.js",
        "kendo.treelist.min": "lib/kendo/kendo.treelist.min.js",
        "kendo.treeview.draganddrop.min": "lib/kendo/kendo.treeview.draganddrop.min.js",
        "kendo.treeview.min": "lib/kendo/kendo.treeview.min.js",
        "kendo.upload.min": "lib/kendo/kendo.upload.min.js",
        "kendo.userevents.min": "lib/kendo/kendo.userevents.min.js",
        "kendo.validator.min": "lib/kendo/kendo.validator.min.js",
        "kendo.view.min": "lib/kendo/kendo.view.min.js",
        "kendo.virtuallist.min": "lib/kendo/kendo.virtuallist.min.js",
        "kendo.window.min": "lib/kendo/kendo.window.min.js",
        "pako_deflate.min": "lib/kendo/pako_deflate.min.js",
        "kendoaspnetmvc": "lib/kendo/kendo.aspnetmvc.min.js",
        "kendodatavizbarcode": "lib/kendo/kendo.dataviz.barcode.min.js",
        "kendodatavizchart": "lib/kendo/kendo.dataviz.chart.min.js",
        "kendodatavizcore": "lib/kendo/kendo.dataviz.core.min.js",
        "kendodatavizdiagram": "lib/kendo/kendo.dataviz.diagram.min.js",
        "kendodatavizgauge": "lib/kendo/kendo.dataviz.gauge.min.js",
        "kendodatavizmap": "lib/kendo/kendo.dataviz.map.min.js",
        "kendodatavizqrcode": "lib/kendo/kendo.dataviz.qrcode.min.js",
        "kendodatavizsparkline": "lib/kendo/kendo.dataviz.sparkline.min.js",
        "kendodatavizstock": "lib/kendo/kendo.dataviz.stock.min.js",
        "kendodatavizthemes": "lib/kendo/kendo.dataviz.themes.min.js",
        "kendodataviztreemap": "lib/kendo/kendo.dataviz.treemap.min.js",
        "kendodrawing": "lib/kendo/kendo.drawing.min.js",
        "kendoeditor": "lib/kendo/kendo.editor.min.js",
        "kendogantt": "lib/kendo/kendo.gantt.min.js",
        "kendogrid": "lib/kendo/kendo.grid.min.js",
        "kendopdf": "lib/kendo/kendo.pdf.min.js",
        "kendoscheduler": "lib/kendo/kendo.scheduler.min.js"
    },
    bundles: {
        "kendogrid": ["kendo.grid.min"],
        "kendoaspnetmvc": ["kendo.aspnetmvc.min"],
        "kendodatavizbarcode": ["kendo.dataviz.barcode.min"],
        "kendodatavizchart": ["kendo.dataviz.chart.min"],
        "kendodatavizcore": ["kendo.dataviz.core.min"],
        "kendodatavizdiagram": ["kendo.dataviz.diagram.min"],
        "kendodatavizgauge": ["kendo.dataviz.gauge.min"],
        "kendodatavizmap": ["kendo.dataviz.map.min"],
        "kendodatavizqrcode": ["kendo.dataviz.qrcode.min"],
        "kendodatavizsparkline": ["kendo.dataviz.sparkline.min"],
        "kendodatavizstock": ["kendo.dataviz.stock.min"],
        "kendodatavizthemes": ["kendo.dataviz.themes.min"],
        "kendodataviztreemap": ["kendo.dataviz.treemap.min"],
        "kendodrawing": ["kendo.drawing.min"],
        "kendoeditor": ["kendo.editor.min"],
        "kendogantt": ["kendo.gantt.min"],
        "kendopdf": ["kendo.pdf.min"],
        "kendoscheduler": ["kendo.scheduler.min"]
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "i18next-xhr-backend": "npm:i18next-xhr-backend@1.4.2",
        "aurelia-i18n": "npm:aurelia-i18n@1.6.2",
        "i18next": "npm:i18next@3.5.2",
        "intl": "npm:intl@1.2.5",
        "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
        "aurelia-router": "npm:aurelia-router@1.3.0",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0",
        "assert": "npm:jspm-nodelibs-assert@0.2.1",
        "aurelia-binding": "npm:aurelia-binding@1.2.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
        "aurelia-framework": "npm:aurelia-framework@1.1.4",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.3.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
        "aurelia-pal": "npm:aurelia-pal@1.3.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
        "aurelia-templating": "npm:aurelia-templating@1.4.2",
        "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
        "constants": "npm:jspm-nodelibs-constants@0.2.1",
        "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
        "css": "github:systemjs/plugin-css@0.1.35",
        "events": "npm:jspm-nodelibs-events@0.2.2",
        "font-awesome": "npm:font-awesome@4.7.0",
        "fs": "npm:jspm-nodelibs-fs@0.2.1",
        "jquery": "npm:jquery@3.2.1",
        "os": "npm:jspm-nodelibs-os@0.2.2",
        "path": "npm:jspm-nodelibs-path@0.2.3",
        "process": "npm:jspm-nodelibs-process@0.2.1",
        "stream": "npm:jspm-nodelibs-stream@0.2.1",
        "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
        "util": "npm:jspm-nodelibs-util@0.2.2",
        "vm": "npm:jspm-nodelibs-vm@0.2.1"
    },
    packages: {
        "npm:font-awesome@4.7.0": {
            "map": {
                "css": "github:systemjs/plugin-css@0.1.35"
            }
        },
        "npm:jspm-nodelibs-buffer@0.2.3": {
            "map": {
                "buffer": "npm:buffer@5.0.6"
            }
        },
        "npm:jspm-nodelibs-crypto@0.2.1": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "npm:buffer@5.0.6": {
            "map": {
                "ieee754": "npm:ieee754@1.1.8",
                "base64-js": "npm:base64-js@1.2.1"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.3",
                "pbkdf2": "npm:pbkdf2@3.0.12",
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "create-hmac": "npm:create-hmac@1.1.6",
                "create-hash": "npm:create-hash@1.1.3",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.4",
                "randombytes": "npm:randombytes@2.0.5"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "randombytes": "npm:randombytes@2.0.5",
                "bn.js": "npm:bn.js@4.11.7",
                "miller-rabin": "npm:miller-rabin@4.0.0"
            }
        },
        "npm:browserify-sign@4.0.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "create-hmac": "npm:create-hmac@1.1.6",
                "inherits": "npm:inherits@2.0.3",
                "elliptic": "npm:elliptic@6.4.0",
                "bn.js": "npm:bn.js@4.11.7",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.1.0"
            }
        },
        "npm:create-hmac@1.1.6": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "inherits": "npm:inherits@2.0.3",
                "sha.js": "npm:sha.js@2.4.8",
                "cipher-base": "npm:cipher-base@1.0.3",
                "ripemd160": "npm:ripemd160@2.0.1",
                "safe-buffer": "npm:safe-buffer@5.1.1"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "randombytes": "npm:randombytes@2.0.5",
                "bn.js": "npm:bn.js@4.11.7",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "parse-asn1": "npm:parse-asn1@5.1.0"
            }
        },
        "npm:create-hash@1.1.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "sha.js": "npm:sha.js@2.4.8",
                "cipher-base": "npm:cipher-base@1.0.3",
                "ripemd160": "npm:ripemd160@2.0.1"
            }
        },
        "npm:pbkdf2@3.0.12": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "create-hmac": "npm:create-hmac@1.1.6",
                "sha.js": "npm:sha.js@2.4.8",
                "ripemd160": "npm:ripemd160@2.0.1",
                "safe-buffer": "npm:safe-buffer@5.1.1"
            }
        },
        "npm:jspm-nodelibs-os@0.2.2": {
            "map": {
                "os-browserify": "npm:os-browserify@0.3.0"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "elliptic": "npm:elliptic@6.4.0",
                "bn.js": "npm:bn.js@4.11.7"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "browserify-aes": "npm:browserify-aes@1.0.6"
            }
        },
        "npm:randombytes@2.0.5": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.1"
            }
        },
        "npm:elliptic@6.4.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.7",
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
                "hmac-drbg": "npm:hmac-drbg@1.0.1",
                "hash.js": "npm:hash.js@1.1.3",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
                "brorand": "npm:brorand@1.1.0"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "des.js": "npm:des.js@1.0.0"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.3",
                "cipher-base": "npm:cipher-base@1.0.3",
                "buffer-xor": "npm:buffer-xor@1.0.3"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.7",
                "brorand": "npm:brorand@1.1.0"
            }
        },
        "npm:sha.js@2.4.8": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:cipher-base@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.7",
                "randombytes": "npm:randombytes@2.0.5"
            }
        },
        "npm:parse-asn1@5.1.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.3",
                "pbkdf2": "npm:pbkdf2@3.0.12",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "asn1.js": "npm:asn1.js@4.9.1"
            }
        },
        "npm:ripemd160@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "hash-base": "npm:hash-base@2.0.2"
            }
        },
        "npm:jspm-nodelibs-stream@0.2.1": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:hash.js@1.1.3": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:hmac-drbg@1.0.1": {
            "map": {
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
                "hash.js": "npm:hash.js@1.1.3",
                "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:hash-base@2.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.3"
            }
        },
        "npm:asn1.js@4.9.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.7",
                "inherits": "npm:inherits@2.0.3",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.3",
                "readable-stream": "npm:readable-stream@2.3.3"
            }
        },
        "npm:jspm-nodelibs-string_decoder@0.2.1": {
            "map": {
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:readable-stream@2.3.3": {
            "map": {
                "string_decoder": "npm:string_decoder@1.0.3",
                "inherits": "npm:inherits@2.0.3",
                "safe-buffer": "npm:safe-buffer@5.1.1",
                "isarray": "npm:isarray@1.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "process-nextick-args": "npm:process-nextick-args@1.0.7"
            }
        },
        "npm:string_decoder@1.0.3": {
            "map": {
                "safe-buffer": "npm:safe-buffer@5.1.1"
            }
        }
    }
});
