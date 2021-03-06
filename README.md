npm-compact
===========

compaction of npm-shrinkwrap.json to make it truely `shrink`

shared dependencies will be converged to their common ancestor node as long as it doesn't cause conflicts
designed specifically for application, not modules

this module is meant to be embedded by the actual utility which does npm install or shrinkwrap
as it takes an input of the shrinkwrap json format, and output an optimized shrinkwrap json for further use.

~~~javascript

var truelyShrinked = require('npm-compact').compact(
		require.resolve('./npm-shrinkwrap.json'));

~~~

here's a sample of a real case, before and after the compaction

* after compaction
~~~javascript
{
  "version": "0.4.0",
  "dependencies": {
    "raptor": {
      "version": "2.4.42",
      "from": "raptor@2.4.42",
      "dependencies": {
        "uglify-js": {
          "version": "1.3.5",
          "from": "uglify-js@1.3.x"
        },
        "sax": {
          "version": "0.4.3",
          "from": "sax@~0.4.2"
        },
        "esprima": {
          "version": "0.9.9",
          "from": "esprima@~0.9.9"
        },
        "less": {
          "version": "1.3.3",
          "from": "less@~1.3.3",
          "dependencies": {
            "ycssmin": {
              "version": "1.0.1",
              "from": "ycssmin@>=1.0.1"
            }
          }
        },
        "xmldom": {
          "version": "0.1.16",
          "from": "xmldom@~0.1.13"
        },
        "sqwish": {
          "version": "0.2.1",
          "from": "sqwish@~0.2.0"
        },
        "dustjs-linkedin": {
          "version": "1.2.6",
          "from": "dustjs-linkedin@~1.2.1"
        },
        "dustjs-helpers": {
          "version": "1.1.1",
          "from": "dustjs-helpers@~1.1.1"
        },
        "rapido": {
          "version": "0.2.21",
          "from": "rapido@>=0.2.2",
          "dependencies": {
            "cli-color": {
              "version": "0.2.3",
              "from": "cli-color@~0.2.2",
              "dependencies": {
                "es5-ext": {
                  "version": "0.9.2",
                  "from": "es5-ext@~0.9.2"
                },
                "memoizee": {
                  "version": "0.2.6",
                  "from": "memoizee@~0.2.5",
                  "dependencies": {
                    "event-emitter": {
                      "version": "0.2.2",
                      "from": "event-emitter@~0.2.2"
                    },
                    "next-tick": {
                      "version": "0.1.0",
                      "from": "next-tick@0.1.x"
                    }
                  }
                }
              }
            },
            "prompt": {
              "version": "0.2.11",
              "from": "prompt@~0.2.9",
              "dependencies": {
                "revalidator": {
                  "version": "0.1.5",
                  "from": "revalidator@0.1.x"
                },
                "utile": {
                  "version": "0.2.0",
                  "from": "utile@0.2.x",
                  "dependencies": {
                    "deep-equal": {
                      "version": "0.1.0",
                      "from": "deep-equal@*"
                    },
                    "i": {
                      "version": "0.3.2",
                      "from": "i@0.3.x"
                    },
                    "ncp": {
                      "version": "0.2.7",
                      "from": "ncp@0.2.x"
                    }
                  }
                },
                "winston": {
                  "version": "0.6.2",
                  "from": "winston@0.6.x",
                  "dependencies": {
                    "pkginfo": {
                      "version": "0.2.3",
                      "from": "pkginfo@0.2.x"
                    },
                    "request": {
                      "version": "2.9.203",
                      "from": "request@2.9.x"
                    }
                  }
                },
                "async": {
                  "version": "0.1.22",
                  "from": "async@0.1.x"
                }
              }
            }
          }
        },
        "rapido-raptorjs": {
          "version": "0.3.6",
          "from": "rapido-raptorjs@~0.3.3"
        },
        "coffee-script": {
          "version": "1.6.3",
          "from": "coffee-script@>=1.4.0"
        },
        "cookie": {
          "version": "0.1.0",
          "from": "cookie@~0.1.0"
        }
      }
    },
    "optimist": {
      "version": "0.3.7",
      "from": "http://registry.npmjs.org/optimist/-/optimist-0.3.7.tgz",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2",
          "from": "http://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
        }
      }
    },
    "express-raptor": {
      "version": "0.2.6",
      "from": "http://registry.npmjs.org/express-raptor/-/express-raptor-0.2.6.tgz",
      "dependencies": {
        "express-resetter": {
          "version": "1.0.1",
          "from": "http://registry.npmjs.org/express-resetter/-/express-resetter-1.0.1.tgz"
        }
      }
    },
    "express": {
      "version": "3.1.2",
      "from": "http://registry.npmjs.org/express/-/express-3.1.2.tgz",
      "dependencies": {
        "connect": {
          "version": "2.7.5",
          "from": "http://registry.npmjs.org/connect/-/connect-2.7.5.tgz",
          "dependencies": {
            "qs": {
              "version": "0.5.1",
              "from": "http://registry.npmjs.org/qs/-/qs-0.5.1.tgz"
            },
            "formidable": {
              "version": "1.0.11",
              "from": "http://registry.npmjs.org/formidable/-/formidable-1.0.11.tgz"
            },
            "buffer-crc32": {
              "version": "0.1.1",
              "from": "http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.1.1.tgz"
            }
          }
        },
        "methods": {
          "version": "0.0.1",
          "from": "http://registry.npmjs.org/methods/-/methods-0.0.1.tgz"
        },
        "send": {
          "version": "0.1.0",
          "from": "http://registry.npmjs.org/send/-/send-0.1.0.tgz",
          "dependencies": {
            "mime": {
              "version": "1.2.6",
              "from": "http://registry.npmjs.org/mime/-/mime-1.2.6.tgz"
            }
          }
        },
        "cookie-signature": {
          "version": "1.0.0",
          "from": "http://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.0.tgz"
        },
        "debug": {
          "version": "0.7.2",
          "from": "http://registry.npmjs.org/debug/-/debug-0.7.2.tgz"
        }
      }
    },
    "ebay-global-header": {
      "version": "1.0.5-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-global-header/-/ebay-global-header-1.0.5-beta.tgz",
      "dependencies": {
        "english-time": {
          "version": "0.0.3",
          "from": "http://registry.npmjs.org/english-time/-/english-time-0.0.3.tgz"
        },
        "jshint": {
          "version": "2.1.11",
          "from": "http://registry.npmjs.org/jshint/-/jshint-2.1.11.tgz",
          "dependencies": {
            "shelljs": {
              "version": "0.1.4",
              "from": "http://registry.npmjs.org/shelljs/-/shelljs-0.1.4.tgz"
            },
            "underscore": {
              "version": "1.4.4",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
            },
            "cli": {
              "version": "0.4.5",
              "from": "http://registry.npmjs.org/cli/-/cli-0.4.5.tgz"
            },
            "console-browserify": {
              "version": "0.1.6",
              "from": "http://registry.npmjs.org/console-browserify/-/console-browserify-0.1.6.tgz"
            }
          }
        }
      }
    },
    "raptor-optimizer-ready-plugin": {
      "version": "1.1.1",
      "from": "http://registry.npmjs.dev.ebay.com:5984/raptor-optimizer-ready-plugin/-/raptor-optimizer-ready-plugin-1.1.1.tgz",
      "dependencies": {
        "ebay-ready-client": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ready-client/-/ebay-ready-client-1.0.0-beta.tgz"
        }
      }
    },
    "ebay-ui-components": {
      "version": "2.4.16",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ui-components/-/ebay-ui-components-2.4.16.tgz"
    },
    "ebay-i18n": {
      "version": "1.0.0-beta-20130729172531",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-i18n/-/ebay-i18n-1.0.0-beta-20130729172531.tgz"
    },
    "raptor-hot-reload": {
      "version": "0.1.9",
      "from": "http://registry.npmjs.org/raptor-hot-reload/-/raptor-hot-reload-0.1.9.tgz",
      "dependencies": {
        "hot-reload": {
          "version": "1.2.15",
          "from": "http://registry.npmjs.org/hot-reload/-/hot-reload-1.2.15.tgz",
          "dependencies": {
            "directory-walker": {
              "version": "1.2.3",
              "from": "http://registry.npmjs.org/directory-walker/-/directory-walker-1.2.3.tgz"
            }
          }
        },
        "wrench": {
          "version": "1.5.4",
          "from": "http://registry.npmjs.org/wrench/-/wrench-1.5.4.tgz"
        }
      }
    },
    "socket.io": {
      "version": "0.9.16",
      "from": "http://registry.npmjs.org/socket.io/-/socket.io-0.9.16.tgz",
      "dependencies": {
        "socket.io-client": {
          "version": "0.9.16",
          "from": "http://registry.npmjs.org/socket.io-client/-/socket.io-client-0.9.16.tgz",
          "dependencies": {
            "uglify-js": {
              "version": "1.2.5",
              "from": "http://registry.npmjs.org/uglify-js/-/uglify-js-1.2.5.tgz"
            },
            "ws": {
              "version": "0.4.31",
              "from": "http://registry.npmjs.org/ws/-/ws-0.4.31.tgz",
              "dependencies": {
                "nan": {
                  "version": "0.3.2",
                  "from": "http://registry.npmjs.org/nan/-/nan-0.3.2.tgz"
                },
                "tinycolor": {
                  "version": "0.0.1",
                  "from": "http://registry.npmjs.org/tinycolor/-/tinycolor-0.0.1.tgz"
                },
                "options": {
                  "version": "0.0.5",
                  "from": "http://registry.npmjs.org/options/-/options-0.0.5.tgz"
                }
              }
            },
            "xmlhttprequest": {
              "version": "1.4.2",
              "from": "http://registry.npmjs.org/xmlhttprequest/-/xmlhttprequest-1.4.2.tgz"
            },
            "active-x-obfuscator": {
              "version": "0.0.1",
              "from": "http://registry.npmjs.org/active-x-obfuscator/-/active-x-obfuscator-0.0.1.tgz",
              "dependencies": {
                "zeparser": {
                  "version": "0.0.5",
                  "from": "http://registry.npmjs.org/zeparser/-/zeparser-0.0.5.tgz"
                }
              }
            }
          }
        },
        "policyfile": {
          "version": "0.0.4",
          "from": "http://registry.npmjs.org/policyfile/-/policyfile-0.0.4.tgz"
        },
        "base64id": {
          "version": "0.1.0",
          "from": "http://registry.npmjs.org/base64id/-/base64id-0.1.0.tgz"
        },
        "redis": {
          "version": "0.7.3",
          "from": "http://registry.npmjs.org/redis/-/redis-0.7.3.tgz"
        }
      }
    },
    "cluster2": {
      "version": "0.4.23",
      "from": "cluster2@0.4.23",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        },
        "express": {
          "version": "2.5.11",
          "from": "express@~2.5.11",
          "dependencies": {
            "connect": {
              "version": "1.9.2",
              "from": "connect@1.x"
            },
            "mime": {
              "version": "1.2.4",
              "from": "mime@1.2.4"
            },
            "qs": {
              "version": "0.4.2",
              "from": "qs@0.4.x"
            },
            "mkdirp": {
              "version": "0.3.0",
              "from": "mkdirp@0.3.0"
            }
          }
        },
        "npm": {
          "version": "1.3.14",
          "from": "npm@~1.3.0",
          "dependencies": {
            "semver": {
              "version": "2.2.1",
              "from": "semver@latest"
            },
            "slide": {
              "version": "1.1.5",
              "from": "slide@latest"
            },
            "nopt": {
              "version": "2.1.2",
              "from": "nopt@latest"
            },
            "request": {
              "version": "2.27.0",
              "from": "request@~2.27.0",
              "dependencies": {
                "json-stringify-safe": {
                  "version": "5.0.0",
                  "from": "json-stringify-safe@~5.0.0"
                },
                "hawk": {
                  "version": "1.0.0",
                  "from": "hawk@~1.0.0"
                },
                "form-data": {
                  "version": "0.1.2",
                  "from": "form-data@~0.1.0"
                }
              }
            },
            "tar": {
              "version": "0.1.18",
              "from": "tar@latest"
            },
            "fstream": {
              "version": "0.1.24",
              "from": "fstream@latest"
            },
            "block-stream": {
              "version": "0.0.7",
              "from": "block-stream@latest"
            },
            "node-gyp": {
              "version": "0.11.0",
              "from": "node-gyp@latest"
            },
            "fstream-npm": {
              "version": "0.1.6",
              "from": "fstream-npm@latest",
              "dependencies": {
                "fstream-ignore": {
                  "version": "0.0.7",
                  "from": "fstream-ignore@~0.0.5"
                }
              }
            },
            "npmlog": {
              "version": "0.0.6",
              "from": "npmlog@latest"
            },
            "ansi": {
              "version": "0.2.1",
              "from": "ansi@latest"
            },
            "npm-registry-client": {
              "version": "0.2.29",
              "from": "npm-registry-client@latest",
              "dependencies": {
                "couch-login": {
                  "version": "0.1.18",
                  "from": "couch-login@~0.1.18"
                }
              }
            },
            "read-package-json": {
              "version": "1.1.4",
              "from": "read-package-json@latest",
              "dependencies": {
                "normalize-package-data": {
                  "version": "0.2.7",
                  "from": "normalize-package-data@~0.2.7"
                }
              }
            },
            "read-installed": {
              "version": "0.2.4",
              "from": "read-installed@~0.2.2"
            },
            "init-package-json": {
              "version": "0.0.11",
              "from": "init-package-json@latest"
            },
            "lockfile": {
              "version": "0.4.2",
              "from": "lockfile@0.4.2"
            },
            "once": {
              "version": "1.3.0",
              "from": "once@latest"
            },
            "npmconf": {
              "version": "0.1.5",
              "from": "npmconf@latest",
              "dependencies": {
                "config-chain": {
                  "version": "1.1.8",
                  "from": "config-chain@~1.1.8"
                }
              }
            },
            "cmd-shim": {
              "version": "1.1.1",
              "from": "cmd-shim@latest"
            },
            "sha": {
              "version": "1.2.3",
              "from": "sha@latest",
              "dependencies": {
                "readable-stream": {
                  "version": "1.0.17",
                  "from": "readable-stream@1.0"
                }
              }
            },
            "editor": {
              "version": "0.0.5",
              "from": "editor@latest"
            },
            "github-url-from-username-repo": {
              "version": "0.0.2",
              "from": "github-url-from-username-repo@"
            }
          }
        },
        "when": {
          "version": "2.4.0",
          "from": "when@~2.4.0"
        },
        "memwatch": {
          "version": "0.2.2",
          "from": "memwatch@~0.2.2"
        }
      }
    },
    "module-config": {
      "version": "1.0.11-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/module-config/-/module-config-1.0.11-beta.tgz",
      "dependencies": {
        "raptor-config": {
          "version": "1.0.8",
          "from": "http://registry.npmjs.dev.ebay.com:5984/raptor-config/-/raptor-config-1.0.8.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            }
          }
        },
        "context-config": {
          "version": "0.3.7",
          "from": "http://registry.npmjs.org/context-config/-/context-config-0.3.7.tgz",
          "dependencies": {
            "config": {
              "version": "0.4.32",
              "from": "http://registry.npmjs.org/config/-/config-0.4.32.tgz"
            }
          }
        },
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        }
      }
    },
    "ebay-request-context": {
      "version": "1.0.6-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-request-context/-/ebay-request-context-1.0.6-beta.tgz",
      "dependencies": {
        "locale": {
          "version": "0.0.10",
          "from": "http://registry.npmjs.org/locale/-/locale-0.0.10.tgz"
        }
      }
    },
    "ebay-cookies": {
      "version": "1.0.11",
      "from": "ebay-cookies@1.0.11"
    },
    "ebay-app-launcher": {
      "version": "1.0.2-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-launcher/-/ebay-app-launcher-1.0.2-beta.tgz"
    },
    "ebay-ep": {
      "version": "1.0.16-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ep/-/ebay-ep-1.0.16-beta.tgz"
    },
    "ebay-tracking": {
      "version": "1.0.26-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-tracking/-/ebay-tracking-1.0.26-beta.tgz",
      "dependencies": {
        "trie": {
          "version": "0.2.1",
          "from": "http://registry.npmjs.org/trie/-/trie-0.2.1.tgz"
        },
        "bit-set": {
          "version": "1.0.1",
          "from": "http://registry.npmjs.org/bit-set/-/bit-set-1.0.1.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            }
          }
        }
      }
    },
    "ebay-site-speed": {
      "version": "1.0.3-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-site-speed/-/ebay-site-speed-1.0.3-beta.tgz"
    },
    "ebay-rest-client": {
      "version": "1.0.23-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-rest-client/-/ebay-rest-client-1.0.23-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        }
      }
    },
    "ebay-logging-client": {
      "version": "1.0.17-beta",
      "from": "ebay-logging-client@1.0.17-beta",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        },
        "async-logging": {
          "version": "0.1.21",
          "from": "async-logging@~0.1.6",
          "dependencies": {
            "websocket": {
              "version": "1.0.8",
              "from": "websocket@~1.0.8"
            },
            "msgpack": {
              "version": "0.1.8",
              "from": "msgpack@0.1.8"
            },
            "winston": {
              "version": "0.7.2",
              "from": "winston@~0.7.1"
            },
            "connect": {
              "version": "2.7.11",
              "from": "connect@~2.7.5",
              "dependencies": {
                "cookie-signature": {
                  "version": "1.0.1",
                  "from": "cookie-signature@1.0.1"
                },
                "send": {
                  "version": "0.1.1",
                  "from": "send@0.1.1"
                },
                "debug": {
                  "version": "0.7.4",
                  "from": "debug@*"
                }
              }
            }
          }
        },
        "ebay-app-context": {
          "version": "1.0.1-beta",
          "from": "ebay-app-context@~1.0.0-beta"
        }
      }
    },
    "ebay-error": {
      "version": "1.0.0-beta",
      "from": "ebay-error@1.0.0-beta",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        }
      }
    },
    "ebay-guid": {
      "version": "1.0.3-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-guid/-/ebay-guid-1.0.3-beta.tgz"
    },
    "q": {
      "version": "0.9.6",
      "from": "http://registry.npmjs.org/q/-/q-0.9.6.tgz"
    },
    "underscore": {
      "version": "1.5.2",
      "from": "http://registry.npmjs.org/underscore/-/underscore-1.5.2.tgz"
    },
    "tours-lib": {
      "version": "0.0.4",
      "from": "http://registry.npmjs.dev.ebay.com:5984/tours-lib/-/tours-lib-0.0.4.tgz"
    },
    "ebay-csrf": {
      "version": "1.0.4-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-csrf/-/ebay-csrf-1.0.4-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        },
        "ebay-esams-consumer": {
          "version": "1.0.10-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-esams-consumer/-/ebay-esams-consumer-1.0.10-beta.tgz"
        }
      }
    },
    "mime": {
      "version": "1.2.11",
      "from": "mime@~1.2.9"
    },
    "pkginfo": {
      "version": "0.3.0",
      "from": "pkginfo@0.x.x"
    },
    "read": {
      "version": "1.0.5",
      "from": "read@1.0.x",
      "dependencies": {
        "mute-stream": {
          "version": "0.0.4",
          "from": "mute-stream@~0.0.4"
        }
      }
    },
    "mkdirp": {
      "version": "0.3.5",
      "from": "mkdirp@0.x.x"
    },
    "rimraf": {
      "version": "2.2.2",
      "from": "rimraf@2.x.x"
    },
    "cycle": {
      "version": "1.0.2",
      "from": "cycle@1.0.x"
    },
    "eyes": {
      "version": "0.1.8",
      "from": "eyes@0.1.x"
    },
    "stack-trace": {
      "version": "0.0.7",
      "from": "stack-trace@0.0.x"
    },
    "npm": {
      "version": "1.2.32",
      "from": "npm@~1.2.15",
      "dependencies": {
        "semver": {
          "version": "1.1.4",
          "from": "semver@1.1.4"
        },
        "slide": {
          "version": "1.1.4",
          "from": "slide@latest"
        },
        "graceful-fs": {
          "version": "1.2.2",
          "from": "graceful-fs@latest"
        },
        "nopt": {
          "version": "2.1.1",
          "from": "nopt@latest"
        },
        "rimraf": {
          "version": "2.1.4",
          "from": "rimraf@2"
        },
        "request": {
          "version": "2.21.0",
          "from": "request@latest",
          "dependencies": {
            "http-signature": {
              "version": "0.9.11",
              "from": "http-signature@~0.9.11"
            },
            "node-uuid": {
              "version": "1.4.0",
              "from": "node-uuid@~1.4.0"
            },
            "mime": {
              "version": "1.2.9",
              "from": "mime@~1.2.9"
            }
          }
        },
        "tar": {
          "version": "0.1.17",
          "from": "tar@0.1.17"
        },
        "fstream": {
          "version": "0.1.22",
          "from": "fstream@latest"
        },
        "block-stream": {
          "version": "0.0.6",
          "from": "block-stream@*"
        },
        "inherits": {
          "version": "1.0.0",
          "from": "git://github.com/isaacs/inherits"
        },
        "read": {
          "version": "1.0.4",
          "from": "read@~1.0.3",
          "dependencies": {
            "mute-stream": {
              "version": "0.0.3",
              "from": "mute-stream@~0.0.2"
            }
          }
        },
        "lru-cache": {
          "version": "2.3.0",
          "from": "lru-cache@latest"
        },
        "node-gyp": {
          "version": "0.10.0",
          "from": "node-gyp@latest"
        },
        "fstream-npm": {
          "version": "0.1.4",
          "from": "fstream-npm@latest",
          "dependencies": {
            "fstream-ignore": {
              "version": "0.0.6",
              "from": "fstream-ignore@~0.0.5"
            }
          }
        },
        "npmlog": {
          "version": "0.0.2",
          "from": "npmlog@0"
        },
        "ansi": {
          "version": "0.1.2",
          "from": "ansi@~0.1.2"
        },
        "npm-registry-client": {
          "version": "0.2.24",
          "from": "npm-registry-client@~0.2.22",
          "dependencies": {
            "couch-login": {
              "version": "0.1.17",
              "from": "couch-login@"
            }
          }
        },
        "read-package-json": {
          "version": "0.4.1",
          "from": "read-package-json@~0.4.1",
          "dependencies": {
            "normalize-package-data": {
              "version": "0.1.6",
              "from": "normalize-package-data@~0.1.2"
            }
          }
        },
        "read-installed": {
          "version": "0.1.1",
          "from": "read-installed@0"
        },
        "glob": {
          "version": "3.2.1",
          "from": "glob@3.2.1"
        },
        "init-package-json": {
          "version": "0.0.9",
          "from": "init-package-json@latest"
        },
        "lockfile": {
          "version": "0.3.4",
          "from": "lockfile@0.3.4"
        },
        "once": {
          "version": "1.1.1",
          "from": "once"
        },
        "npmconf": {
          "version": "0.1.0",
          "from": "npmconf@latest",
          "dependencies": {
            "config-chain": {
              "version": "1.1.7",
              "from": "config-chain@~1.1.1"
            }
          }
        },
        "cmd-shim": {
          "version": "1.1.0",
          "from": "cmd-shim@"
        },
        "sha": {
          "version": "1.0.1",
          "from": "sha@~1.0.1"
        },
        "editor": {
          "version": "0.0.4",
          "from": "editor@"
        },
        "normalize-package-data": {
          "version": "0.1.7",
          "from": "normalize-package-data@0.1.7"
        }
      }
    },
    "colors": {
      "version": "0.6.2",
      "from": "colors@~0.6.0-1"
    },
    "minimatch": {
      "version": "0.2.12",
      "from": "minimatch@0.2.x",
      "dependencies": {
        "sigmund": {
          "version": "1.0.0",
          "from": "sigmund@~1.0.0"
        }
      }
    },
    "path-filters": {
      "version": "1.0.5",
      "from": "path-filters@~1.0.5"
    },
    "bytes": {
      "version": "0.2.0",
      "from": "http://registry.npmjs.org/bytes/-/bytes-0.2.0.tgz"
    },
    "pause": {
      "version": "0.0.1",
      "from": "http://registry.npmjs.org/pause/-/pause-0.0.1.tgz"
    },
    "commander": {
      "version": "0.6.1",
      "from": "commander@0.6.1"
    },
    "range-parser": {
      "version": "0.0.4",
      "from": "http://registry.npmjs.org/range-parser/-/range-parser-0.0.4.tgz"
    },
    "cookie": {
      "version": "0.0.5",
      "from": "http://registry.npmjs.org/cookie/-/cookie-0.0.5.tgz"
    },
    "buffer-crc32": {
      "version": "0.2.1",
      "from": "http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.1.tgz"
    },
    "fresh": {
      "version": "0.1.0",
      "from": "http://registry.npmjs.org/fresh/-/fresh-0.1.0.tgz"
    },
    "ebay-app-meta": {
      "version": "1.0.3-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.3.3",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
        },
        "xml2json": {
          "version": "0.3.2",
          "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz"
        }
      }
    },
    "ebay-app-context": {
      "version": "1.0.2-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz"
    },
    "ebay-raptor-pres": {
      "version": "1.0.0-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-raptor-pres/-/ebay-raptor-pres-1.0.0-beta.tgz"
    },
    "glob": {
      "version": "3.2.6",
      "from": "http://registry.npmjs.org/glob/-/glob-3.2.6.tgz"
    },
    "formidable": {
      "version": "1.0.14",
      "from": "formidable@1.0.x"
    },
    "ejs": {
      "version": "0.8.4",
      "from": "ejs@~0.8.4"
    },
    "ini": {
      "version": "1.1.0",
      "from": "ini@latest"
    },
    "abbrev": {
      "version": "1.0.4",
      "from": "abbrev@latest"
    },
    "graceful-fs": {
      "version": "2.0.1",
      "from": "graceful-fs@~2.0.0"
    },
    "qs": {
      "version": "0.6.5",
      "from": "qs@~0.6.0"
    },
    "forever-agent": {
      "version": "0.5.0",
      "from": "forever-agent@~0.5.0"
    },
    "tunnel-agent": {
      "version": "0.3.0",
      "from": "tunnel-agent@~0.3.0"
    },
    "http-signature": {
      "version": "0.10.0",
      "from": "http-signature@~0.10.0"
    },
    "hoek": {
      "version": "0.9.1",
      "from": "hoek@0.9.x"
    },
    "boom": {
      "version": "0.4.2",
      "from": "boom@0.4.x"
    },
    "cryptiles": {
      "version": "0.2.2",
      "from": "cryptiles@0.2.x"
    },
    "sntp": {
      "version": "0.2.4",
      "from": "sntp@0.2.x"
    },
    "aws-sign": {
      "version": "0.3.0",
      "from": "aws-sign@~0.3.0"
    },
    "oauth-sign": {
      "version": "0.3.0",
      "from": "oauth-sign@~0.3.0"
    },
    "cookie-jar": {
      "version": "0.3.0",
      "from": "cookie-jar@~0.3.0"
    },
    "node-uuid": {
      "version": "1.4.1",
      "from": "node-uuid@~1.4.0"
    },
    "combined-stream": {
      "version": "0.0.4",
      "from": "combined-stream@~0.0.4",
      "dependencies": {
        "delayed-stream": {
          "version": "0.0.5",
          "from": "delayed-stream@0.0.5"
        }
      }
    },
    "async": {
      "version": "0.2.9",
      "from": "async@~0.2.9"
    },
    "which": {
      "version": "1.0.5",
      "from": "which@1"
    },
    "lru-cache": {
      "version": "2.3.1",
      "from": "lru-cache@2.3.1"
    },
    "uid-number": {
      "version": "0.0.3",
      "from": "../uid-number"
    },
    "archy": {
      "version": "0.0.2",
      "from": "archy@0.0.2"
    },
    "chownr": {
      "version": "0.0.1",
      "from": "../chownr"
    },
    "promzard": {
      "version": "0.2.0",
      "from": "promzard@~0.2.0"
    },
    "osenv": {
      "version": "0.0.3",
      "from": "osenv@latest"
    },
    "retry": {
      "version": "0.6.0",
      "from": "retry"
    },
    "proto-list": {
      "version": "1.2.2",
      "from": "proto-list@~1.2.1"
    },
    "opener": {
      "version": "1.3.0",
      "from": "opener@latest"
    },
    "chmodr": {
      "version": "0.1.0",
      "from": "chmodr@latest"
    },
    "child-process-close": {
      "version": "0.1.1",
      "from": "child-process-close@"
    },
    "npm-user-validate": {
      "version": "0.0.3",
      "from": "npm-user-validate@0.0.3"
    },
    "github-url-from-git": {
      "version": "1.1.1",
      "from": "github-url-from-git@1.1.1"
    },
    "inherits": {
      "version": "2.0.1",
      "from": "inherits@"
    },
    "usage": {
      "version": "0.3.9",
      "from": "usage@~0.3.8",
      "dependencies": {
        "bindings": {
          "version": "1.1.1",
          "from": "bindings@1.x.x"
        }
      }
    },
    "request": {
      "version": "2.22.0",
      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz"
    },
    "ebay-domainipcheck": {
      "version": "1.0.0-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        }
      }
    },
    "ebay-validateinternals": {
      "version": "1.0.15-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
      "dependencies": {
        "moment": {
          "version": "2.0.0",
          "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
        },
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        },
        "when": {
          "version": "2.2.1",
          "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
        }
      }
    },
    "ebay-soa": {
      "version": "1.0.17-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
      "dependencies": {
        "soap": {
          "version": "0.2.10",
          "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
        },
        "underscore": {
          "version": "1.3.3",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
        }
      }
    },
    "sax": {
      "version": "0.5.5",
      "from": "http://registry.npmjs.org/sax/-/sax-0.5.5.tgz"
    },
    "ip": {
      "version": "0.1.0",
      "from": "ip@~0.1.0"
    },
    "properties": {
      "version": "0.3.3",
      "from": "properties@0.3.3",
      "dependencies": {
        "buffered-reader": {
          "version": "1.0.1",
          "from": "buffered-reader@*",
          "dependencies": {
            "errno-codes": {
              "version": "1.0.2",
              "from": "errno-codes@*"
            }
          }
        },
        "buffered-writer": {
          "version": "0.2.3",
          "from": "buffered-writer@*"
        },
        "error-provider": {
          "version": "0.0.6",
          "from": "error-provider@*"
        }
      }
    },
    "json-stringify-safe": {
      "version": "4.0.0",
      "from": "json-stringify-safe@~4.0.0"
    },
    "assert-plus": {
      "version": "0.1.2",
      "from": "assert-plus@0.1.2"
    },
    "asn1": {
      "version": "0.1.11",
      "from": "asn1@0.1.11"
    },
    "ctype": {
      "version": "0.5.2",
      "from": "ctype@0.5.2"
    },
    "hawk": {
      "version": "0.13.1",
      "from": "hawk@~0.13.0",
      "dependencies": {
        "hoek": {
          "version": "0.8.5",
          "from": "hoek@0.8.x"
        },
        "cryptiles": {
          "version": "0.2.1",
          "from": "cryptiles@0.2.x"
        }
      }
    },
    "form-data": {
      "version": "0.0.8",
      "from": "form-data@0.0.8"
    },
    "node-expat": {
      "version": "2.0.0",
      "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
    }
  },
  "name": "fe-collections"
}
~~~

* origin, it's actually so long, 7k+
~~~javascript
{
  "name": "fe-collections",
  "version": "0.4.0",
  "dependencies": {
    "raptor": {
      "version": "2.4.42",
      "from": "raptor@2.4.42",
      "dependencies": {
        "uglify-js": {
          "version": "1.3.5",
          "from": "uglify-js@1.3.x"
        },
        "mime": {
          "version": "1.2.11",
          "from": "mime@~1.2.9"
        },
        "sax": {
          "version": "0.4.3",
          "from": "sax@~0.4.2"
        },
        "esprima": {
          "version": "0.9.9",
          "from": "esprima@~0.9.9"
        },
        "less": {
          "version": "1.3.3",
          "from": "less@~1.3.3",
          "dependencies": {
            "ycssmin": {
              "version": "1.0.1",
              "from": "ycssmin@>=1.0.1"
            }
          }
        },
        "xmldom": {
          "version": "0.1.16",
          "from": "xmldom@~0.1.13"
        },
        "sqwish": {
          "version": "0.2.1",
          "from": "sqwish@~0.2.0"
        },
        "dustjs-linkedin": {
          "version": "1.2.6",
          "from": "dustjs-linkedin@~1.2.1"
        },
        "dustjs-helpers": {
          "version": "1.1.1",
          "from": "dustjs-helpers@~1.1.1"
        },
        "rapido": {
          "version": "0.2.21",
          "from": "rapido@>=0.2.2",
          "dependencies": {
            "cli-color": {
              "version": "0.2.3",
              "from": "cli-color@~0.2.2",
              "dependencies": {
                "es5-ext": {
                  "version": "0.9.2",
                  "from": "es5-ext@~0.9.2"
                },
                "memoizee": {
                  "version": "0.2.6",
                  "from": "memoizee@~0.2.5",
                  "dependencies": {
                    "event-emitter": {
                      "version": "0.2.2",
                      "from": "event-emitter@~0.2.2"
                    },
                    "next-tick": {
                      "version": "0.1.0",
                      "from": "next-tick@0.1.x"
                    }
                  }
                }
              }
            },
            "prompt": {
              "version": "0.2.11",
              "from": "prompt@~0.2.9",
              "dependencies": {
                "pkginfo": {
                  "version": "0.3.0",
                  "from": "pkginfo@0.x.x"
                },
                "read": {
                  "version": "1.0.5",
                  "from": "read@1.0.x",
                  "dependencies": {
                    "mute-stream": {
                      "version": "0.0.4",
                      "from": "mute-stream@~0.0.4"
                    }
                  }
                },
                "revalidator": {
                  "version": "0.1.5",
                  "from": "revalidator@0.1.x"
                },
                "utile": {
                  "version": "0.2.0",
                  "from": "utile@0.2.x",
                  "dependencies": {
                    "async": {
                      "version": "0.1.22",
                      "from": "async@0.1.x"
                    },
                    "deep-equal": {
                      "version": "0.1.0",
                      "from": "deep-equal@*"
                    },
                    "i": {
                      "version": "0.3.2",
                      "from": "i@0.3.x"
                    },
                    "mkdirp": {
                      "version": "0.3.5",
                      "from": "mkdirp@0.x.x"
                    },
                    "ncp": {
                      "version": "0.2.7",
                      "from": "ncp@0.2.x"
                    },
                    "rimraf": {
                      "version": "2.2.2",
                      "from": "rimraf@2.x.x",
                      "dependencies": {
                        "graceful-fs": {
                          "version": "2.0.1",
                          "from": "graceful-fs@~2"
                        }
                      }
                    }
                  }
                },
                "winston": {
                  "version": "0.6.2",
                  "from": "winston@0.6.x",
                  "dependencies": {
                    "async": {
                      "version": "0.1.22",
                      "from": "async@0.1.x"
                    },
                    "cycle": {
                      "version": "1.0.2",
                      "from": "cycle@1.0.x"
                    },
                    "eyes": {
                      "version": "0.1.8",
                      "from": "eyes@0.1.x"
                    },
                    "pkginfo": {
                      "version": "0.2.3",
                      "from": "pkginfo@0.2.x"
                    },
                    "request": {
                      "version": "2.9.203",
                      "from": "request@2.9.x"
                    },
                    "stack-trace": {
                      "version": "0.0.7",
                      "from": "stack-trace@0.0.x"
                    }
                  }
                }
              }
            },
            "npm": {
              "version": "1.2.32",
              "from": "npm@~1.2.15",
              "dependencies": {
                "semver": {
                  "version": "1.1.4",
                  "from": "semver@1.1.4"
                },
                "ini": {
                  "version": "1.1.0",
                  "from": "ini@latest"
                },
                "slide": {
                  "version": "1.1.4",
                  "from": "slide@latest"
                },
                "abbrev": {
                  "version": "1.0.4",
                  "from": "abbrev@latest"
                },
                "graceful-fs": {
                  "version": "1.2.2",
                  "from": "graceful-fs@latest"
                },
                "minimatch": {
                  "version": "0.2.12",
                  "from": "minimatch@latest",
                  "dependencies": {
                    "sigmund": {
                      "version": "1.0.0",
                      "from": "sigmund@~1.0.0"
                    }
                  }
                },
                "nopt": {
                  "version": "2.1.1",
                  "from": "nopt@latest"
                },
                "rimraf": {
                  "version": "2.1.4",
                  "from": "rimraf@2"
                },
                "request": {
                  "version": "2.21.0",
                  "from": "request@latest",
                  "dependencies": {
                    "qs": {
                      "version": "0.6.5",
                      "from": "qs@~0.6.0"
                    },
                    "json-stringify-safe": {
                      "version": "4.0.0",
                      "from": "json-stringify-safe@~4.0.0"
                    },
                    "forever-agent": {
                      "version": "0.5.0",
                      "from": "forever-agent@~0.5.0"
                    },
                    "tunnel-agent": {
                      "version": "0.3.0",
                      "from": "tunnel-agent@~0.3.0"
                    },
                    "http-signature": {
                      "version": "0.9.11",
                      "from": "http-signature@~0.9.11",
                      "dependencies": {
                        "assert-plus": {
                          "version": "0.1.2",
                          "from": "assert-plus@0.1.2"
                        },
                        "asn1": {
                          "version": "0.1.11",
                          "from": "asn1@0.1.11"
                        },
                        "ctype": {
                          "version": "0.5.2",
                          "from": "ctype@0.5.2"
                        }
                      }
                    },
                    "hawk": {
                      "version": "0.13.1",
                      "from": "hawk@~0.13.0",
                      "dependencies": {
                        "hoek": {
                          "version": "0.8.5",
                          "from": "hoek@0.8.x"
                        },
                        "boom": {
                          "version": "0.4.2",
                          "from": "boom@0.4.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        },
                        "cryptiles": {
                          "version": "0.2.1",
                          "from": "cryptiles@0.2.x"
                        },
                        "sntp": {
                          "version": "0.2.4",
                          "from": "sntp@0.2.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        }
                      }
                    },
                    "aws-sign": {
                      "version": "0.3.0",
                      "from": "aws-sign@~0.3.0"
                    },
                    "oauth-sign": {
                      "version": "0.3.0",
                      "from": "oauth-sign@~0.3.0"
                    },
                    "cookie-jar": {
                      "version": "0.3.0",
                      "from": "cookie-jar@~0.3.0"
                    },
                    "node-uuid": {
                      "version": "1.4.0",
                      "from": "node-uuid@~1.4.0"
                    },
                    "mime": {
                      "version": "1.2.9",
                      "from": "mime@~1.2.9"
                    },
                    "form-data": {
                      "version": "0.0.8",
                      "from": "form-data@0.0.8",
                      "dependencies": {
                        "combined-stream": {
                          "version": "0.0.4",
                          "from": "combined-stream@~0.0.4",
                          "dependencies": {
                            "delayed-stream": {
                              "version": "0.0.5",
                              "from": "delayed-stream@0.0.5"
                            }
                          }
                        },
                        "async": {
                          "version": "0.2.9",
                          "from": "async@~0.2.7"
                        }
                      }
                    }
                  }
                },
                "which": {
                  "version": "1.0.5",
                  "from": "which@1"
                },
                "tar": {
                  "version": "0.1.17",
                  "from": "tar@0.1.17"
                },
                "fstream": {
                  "version": "0.1.22",
                  "from": "fstream@latest"
                },
                "block-stream": {
                  "version": "0.0.6",
                  "from": "block-stream@*"
                },
                "inherits": {
                  "version": "1.0.0",
                  "from": "git://github.com/isaacs/inherits"
                },
                "mkdirp": {
                  "version": "0.3.5",
                  "from": "mkdirp@0.3.5"
                },
                "read": {
                  "version": "1.0.4",
                  "from": "read@~1.0.3",
                  "dependencies": {
                    "mute-stream": {
                      "version": "0.0.3",
                      "from": "mute-stream@~0.0.2"
                    }
                  }
                },
                "lru-cache": {
                  "version": "2.3.0",
                  "from": "lru-cache@latest"
                },
                "node-gyp": {
                  "version": "0.10.0",
                  "from": "node-gyp@latest"
                },
                "fstream-npm": {
                  "version": "0.1.4",
                  "from": "fstream-npm@latest",
                  "dependencies": {
                    "fstream-ignore": {
                      "version": "0.0.6",
                      "from": "fstream-ignore@~0.0.5"
                    }
                  }
                },
                "uid-number": {
                  "version": "0.0.3",
                  "from": "../uid-number"
                },
                "archy": {
                  "version": "0.0.2",
                  "from": "archy@0.0.2"
                },
                "chownr": {
                  "version": "0.0.1",
                  "from": "../chownr"
                },
                "npmlog": {
                  "version": "0.0.2",
                  "from": "npmlog@0"
                },
                "ansi": {
                  "version": "0.1.2",
                  "from": "ansi@~0.1.2"
                },
                "npm-registry-client": {
                  "version": "0.2.24",
                  "from": "npm-registry-client@~0.2.22",
                  "dependencies": {
                    "couch-login": {
                      "version": "0.1.17",
                      "from": "couch-login@"
                    }
                  }
                },
                "read-package-json": {
                  "version": "0.4.1",
                  "from": "read-package-json@~0.4.1",
                  "dependencies": {
                    "normalize-package-data": {
                      "version": "0.1.6",
                      "from": "normalize-package-data@~0.1.2",
                      "dependencies": {
                        "github-url-from-git": {
                          "version": "1.1.1",
                          "from": "github-url-from-git@~1.1.1"
                        }
                      }
                    }
                  }
                },
                "read-installed": {
                  "version": "0.1.1",
                  "from": "read-installed@0"
                },
                "glob": {
                  "version": "3.2.1",
                  "from": "glob@3.2.1"
                },
                "init-package-json": {
                  "version": "0.0.9",
                  "from": "init-package-json@latest",
                  "dependencies": {
                    "promzard": {
                      "version": "0.2.0",
                      "from": "promzard@~0.2.0"
                    }
                  }
                },
                "osenv": {
                  "version": "0.0.3",
                  "from": "osenv@latest"
                },
                "lockfile": {
                  "version": "0.3.4",
                  "from": "lockfile@0.3.4"
                },
                "retry": {
                  "version": "0.6.0",
                  "from": "retry"
                },
                "once": {
                  "version": "1.1.1",
                  "from": "once"
                },
                "npmconf": {
                  "version": "0.1.0",
                  "from": "npmconf@latest",
                  "dependencies": {
                    "config-chain": {
                      "version": "1.1.7",
                      "from": "config-chain@~1.1.1",
                      "dependencies": {
                        "proto-list": {
                          "version": "1.2.2",
                          "from": "proto-list@~1.2.1"
                        }
                      }
                    }
                  }
                },
                "opener": {
                  "version": "1.3.0",
                  "from": "opener@latest"
                },
                "chmodr": {
                  "version": "0.1.0",
                  "from": "chmodr@latest"
                },
                "cmd-shim": {
                  "version": "1.1.0",
                  "from": "cmd-shim@"
                },
                "sha": {
                  "version": "1.0.1",
                  "from": "sha@~1.0.1"
                },
                "editor": {
                  "version": "0.0.4",
                  "from": "editor@"
                },
                "child-process-close": {
                  "version": "0.1.1",
                  "from": "child-process-close@"
                },
                "npm-user-validate": {
                  "version": "0.0.3",
                  "from": "npm-user-validate@0.0.3"
                },
                "normalize-package-data": {
                  "version": "0.1.7",
                  "from": "normalize-package-data@0.1.7",
                  "dependencies": {
                    "github-url-from-git": {
                      "version": "1.1.1",
                      "from": "github-url-from-git@~1.1.1"
                    }
                  }
                }
              }
            },
            "colors": {
              "version": "0.6.2",
              "from": "colors@~0.6.0-1"
            }
          }
        },
        "rapido-raptorjs": {
          "version": "0.3.6",
          "from": "rapido-raptorjs@~0.3.3"
        },
        "coffee-script": {
          "version": "1.6.3",
          "from": "coffee-script@>=1.4.0"
        },
        "cookie": {
          "version": "0.1.0",
          "from": "cookie@~0.1.0"
        },
        "minimatch": {
          "version": "0.2.12",
          "from": "minimatch@0.2.x",
          "dependencies": {
            "lru-cache": {
              "version": "2.3.1",
              "from": "lru-cache@2"
            },
            "sigmund": {
              "version": "1.0.0",
              "from": "sigmund@~1.0.0"
            }
          }
        },
        "path-filters": {
          "version": "1.0.5",
          "from": "path-filters@~1.0.5"
        }
      }
    },
    "optimist": {
      "version": "0.3.7",
      "from": "http://registry.npmjs.org/optimist/-/optimist-0.3.7.tgz",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2",
          "from": "http://registry.npmjs.org/wordwrap/-/wordwrap-0.0.2.tgz"
        }
      }
    },
    "express-raptor": {
      "version": "0.2.6",
      "from": "http://registry.npmjs.org/express-raptor/-/express-raptor-0.2.6.tgz",
      "dependencies": {
        "express-resetter": {
          "version": "1.0.1",
          "from": "http://registry.npmjs.org/express-resetter/-/express-resetter-1.0.1.tgz"
        }
      }
    },
    "express": {
      "version": "3.1.2",
      "from": "http://registry.npmjs.org/express/-/express-3.1.2.tgz",
      "dependencies": {
        "connect": {
          "version": "2.7.5",
          "from": "http://registry.npmjs.org/connect/-/connect-2.7.5.tgz",
          "dependencies": {
            "qs": {
              "version": "0.5.1",
              "from": "http://registry.npmjs.org/qs/-/qs-0.5.1.tgz"
            },
            "formidable": {
              "version": "1.0.11",
              "from": "http://registry.npmjs.org/formidable/-/formidable-1.0.11.tgz"
            },
            "buffer-crc32": {
              "version": "0.1.1",
              "from": "http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.1.1.tgz"
            },
            "bytes": {
              "version": "0.2.0",
              "from": "http://registry.npmjs.org/bytes/-/bytes-0.2.0.tgz"
            },
            "pause": {
              "version": "0.0.1",
              "from": "http://registry.npmjs.org/pause/-/pause-0.0.1.tgz"
            }
          }
        },
        "commander": {
          "version": "0.6.1",
          "from": "commander@0.6.1"
        },
        "range-parser": {
          "version": "0.0.4",
          "from": "http://registry.npmjs.org/range-parser/-/range-parser-0.0.4.tgz"
        },
        "mkdirp": {
          "version": "0.3.5",
          "from": "http://registry.npmjs.org/mkdirp/-/mkdirp-0.3.5.tgz"
        },
        "cookie": {
          "version": "0.0.5",
          "from": "http://registry.npmjs.org/cookie/-/cookie-0.0.5.tgz"
        },
        "buffer-crc32": {
          "version": "0.2.1",
          "from": "http://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.1.tgz"
        },
        "fresh": {
          "version": "0.1.0",
          "from": "http://registry.npmjs.org/fresh/-/fresh-0.1.0.tgz"
        },
        "methods": {
          "version": "0.0.1",
          "from": "http://registry.npmjs.org/methods/-/methods-0.0.1.tgz"
        },
        "send": {
          "version": "0.1.0",
          "from": "http://registry.npmjs.org/send/-/send-0.1.0.tgz",
          "dependencies": {
            "mime": {
              "version": "1.2.6",
              "from": "http://registry.npmjs.org/mime/-/mime-1.2.6.tgz"
            }
          }
        },
        "cookie-signature": {
          "version": "1.0.0",
          "from": "http://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.0.tgz"
        },
        "debug": {
          "version": "0.7.2",
          "from": "http://registry.npmjs.org/debug/-/debug-0.7.2.tgz"
        }
      }
    },
    "request": {
      "version": "2.16.6",
      "from": "http://registry.npmjs.org/request/-/request-2.16.6.tgz",
      "dependencies": {
        "form-data": {
          "version": "0.0.10",
          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.10.tgz",
          "dependencies": {
            "combined-stream": {
              "version": "0.0.4",
              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
              "dependencies": {
                "delayed-stream": {
                  "version": "0.0.5",
                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                }
              }
            },
            "async": {
              "version": "0.2.9",
              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
            }
          }
        },
        "mime": {
          "version": "1.2.11",
          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
        },
        "hawk": {
          "version": "0.10.2",
          "from": "http://registry.npmjs.org/hawk/-/hawk-0.10.2.tgz",
          "dependencies": {
            "hoek": {
              "version": "0.7.6",
              "from": "http://registry.npmjs.org/hoek/-/hoek-0.7.6.tgz"
            },
            "boom": {
              "version": "0.3.8",
              "from": "http://registry.npmjs.org/boom/-/boom-0.3.8.tgz"
            },
            "cryptiles": {
              "version": "0.1.3",
              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.1.3.tgz"
            },
            "sntp": {
              "version": "0.1.4",
              "from": "http://registry.npmjs.org/sntp/-/sntp-0.1.4.tgz"
            }
          }
        },
        "node-uuid": {
          "version": "1.4.1",
          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
        },
        "cookie-jar": {
          "version": "0.2.0",
          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.2.0.tgz"
        },
        "aws-sign": {
          "version": "0.2.0",
          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.2.0.tgz"
        },
        "oauth-sign": {
          "version": "0.2.0",
          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.2.0.tgz"
        },
        "forever-agent": {
          "version": "0.2.0",
          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.2.0.tgz"
        },
        "tunnel-agent": {
          "version": "0.2.0",
          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.2.0.tgz"
        },
        "json-stringify-safe": {
          "version": "3.0.0",
          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-3.0.0.tgz"
        },
        "qs": {
          "version": "0.5.6",
          "from": "http://registry.npmjs.org/qs/-/qs-0.5.6.tgz"
        }
      }
    },
    "ebay-global-header": {
      "version": "1.0.5-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-global-header/-/ebay-global-header-1.0.5-beta.tgz",
      "dependencies": {
        "ebay-app-meta": {
          "version": "1.0.3-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "xml2json": {
              "version": "0.3.2",
              "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                }
              }
            },
            "ebay-soa": {
              "version": "1.0.17-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                },
                "soap": {
                  "version": "0.2.10",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
                },
                "ebay-validateinternals": {
                  "version": "1.0.15-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
                  "dependencies": {
                    "ebay-domainipcheck": {
                      "version": "1.0.0-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
                    },
                    "ejs": {
                      "version": "0.8.4",
                      "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                    },
                    "moment": {
                      "version": "2.0.0",
                      "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                    },
                    "request": {
                      "version": "2.22.0",
                      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                        },
                        "http-signature": {
                          "version": "0.10.0",
                          "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.2",
                              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                        },
                        "node-uuid": {
                          "version": "1.4.1",
                          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                        },
                        "mime": {
                          "version": "1.2.11",
                          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                            }
                          }
                        }
                      }
                    },
                    "underscore": {
                      "version": "1.4.4",
                      "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                    },
                    "ip": {
                      "version": "0.1.0",
                      "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                    },
                    "npm": {
                      "version": "1.2.32",
                      "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                      "dependencies": {
                        "semver": {
                          "version": "1.1.4",
                          "from": "semver@1.1.4"
                        },
                        "ini": {
                          "version": "1.1.0",
                          "from": "ini@latest"
                        },
                        "slide": {
                          "version": "1.1.4",
                          "from": "slide@latest"
                        },
                        "abbrev": {
                          "version": "1.0.4",
                          "from": "abbrev@latest"
                        },
                        "graceful-fs": {
                          "version": "1.2.2",
                          "from": "graceful-fs@latest"
                        },
                        "minimatch": {
                          "version": "0.2.12",
                          "from": "minimatch@latest",
                          "dependencies": {
                            "sigmund": {
                              "version": "1.0.0",
                              "from": "sigmund@~1.0.0"
                            }
                          }
                        },
                        "nopt": {
                          "version": "2.1.1",
                          "from": "nopt@latest"
                        },
                        "rimraf": {
                          "version": "2.1.4",
                          "from": "rimraf@2"
                        },
                        "request": {
                          "version": "2.21.0",
                          "from": "request@latest",
                          "dependencies": {
                            "qs": {
                              "version": "0.6.5",
                              "from": "qs@~0.6.0"
                            },
                            "json-stringify-safe": {
                              "version": "4.0.0",
                              "from": "json-stringify-safe@~4.0.0"
                            },
                            "forever-agent": {
                              "version": "0.5.0",
                              "from": "forever-agent@~0.5.0"
                            },
                            "tunnel-agent": {
                              "version": "0.3.0",
                              "from": "tunnel-agent@~0.3.0"
                            },
                            "http-signature": {
                              "version": "0.9.11",
                              "from": "http-signature@~0.9.11",
                              "dependencies": {
                                "assert-plus": {
                                  "version": "0.1.2",
                                  "from": "assert-plus@0.1.2"
                                },
                                "asn1": {
                                  "version": "0.1.11",
                                  "from": "asn1@0.1.11"
                                },
                                "ctype": {
                                  "version": "0.5.2",
                                  "from": "ctype@0.5.2"
                                }
                              }
                            },
                            "hawk": {
                              "version": "0.13.1",
                              "from": "hawk@~0.13.0",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.8.5",
                                  "from": "hoek@0.8.x"
                                },
                                "boom": {
                                  "version": "0.4.2",
                                  "from": "boom@0.4.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                },
                                "cryptiles": {
                                  "version": "0.2.1",
                                  "from": "cryptiles@0.2.x"
                                },
                                "sntp": {
                                  "version": "0.2.4",
                                  "from": "sntp@0.2.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                }
                              }
                            },
                            "aws-sign": {
                              "version": "0.3.0",
                              "from": "aws-sign@~0.3.0"
                            },
                            "oauth-sign": {
                              "version": "0.3.0",
                              "from": "oauth-sign@~0.3.0"
                            },
                            "cookie-jar": {
                              "version": "0.3.0",
                              "from": "cookie-jar@~0.3.0"
                            },
                            "node-uuid": {
                              "version": "1.4.0",
                              "from": "node-uuid@~1.4.0"
                            },
                            "mime": {
                              "version": "1.2.9",
                              "from": "mime@~1.2.9"
                            },
                            "form-data": {
                              "version": "0.0.8",
                              "from": "form-data@0.0.8",
                              "dependencies": {
                                "combined-stream": {
                                  "version": "0.0.4",
                                  "from": "combined-stream@~0.0.4",
                                  "dependencies": {
                                    "delayed-stream": {
                                      "version": "0.0.5",
                                      "from": "delayed-stream@0.0.5"
                                    }
                                  }
                                },
                                "async": {
                                  "version": "0.2.9",
                                  "from": "async@~0.2.7"
                                }
                              }
                            }
                          }
                        },
                        "which": {
                          "version": "1.0.5",
                          "from": "which@1"
                        },
                        "tar": {
                          "version": "0.1.17",
                          "from": "tar@0.1.17"
                        },
                        "fstream": {
                          "version": "0.1.22",
                          "from": "fstream@latest"
                        },
                        "block-stream": {
                          "version": "0.0.6",
                          "from": "block-stream@*"
                        },
                        "inherits": {
                          "version": "1.0.0",
                          "from": "git://github.com/isaacs/inherits"
                        },
                        "mkdirp": {
                          "version": "0.3.5",
                          "from": "mkdirp@0.3.5"
                        },
                        "read": {
                          "version": "1.0.4",
                          "from": "read@~1.0.3",
                          "dependencies": {
                            "mute-stream": {
                              "version": "0.0.3",
                              "from": "mute-stream@~0.0.2"
                            }
                          }
                        },
                        "lru-cache": {
                          "version": "2.3.0",
                          "from": "lru-cache@latest"
                        },
                        "node-gyp": {
                          "version": "0.10.0",
                          "from": "node-gyp@latest"
                        },
                        "fstream-npm": {
                          "version": "0.1.4",
                          "from": "fstream-npm@latest",
                          "dependencies": {
                            "fstream-ignore": {
                              "version": "0.0.6",
                              "from": "fstream-ignore@~0.0.5"
                            }
                          }
                        },
                        "uid-number": {
                          "version": "0.0.3",
                          "from": "../uid-number"
                        },
                        "archy": {
                          "version": "0.0.2",
                          "from": "archy@0.0.2"
                        },
                        "chownr": {
                          "version": "0.0.1",
                          "from": "../chownr"
                        },
                        "npmlog": {
                          "version": "0.0.2",
                          "from": "npmlog@0"
                        },
                        "ansi": {
                          "version": "0.1.2",
                          "from": "ansi@~0.1.2"
                        },
                        "npm-registry-client": {
                          "version": "0.2.24",
                          "from": "npm-registry-client@~0.2.22",
                          "dependencies": {
                            "couch-login": {
                              "version": "0.1.17",
                              "from": "couch-login@"
                            }
                          }
                        },
                        "read-package-json": {
                          "version": "0.4.1",
                          "from": "read-package-json@~0.4.1",
                          "dependencies": {
                            "normalize-package-data": {
                              "version": "0.1.6",
                              "from": "normalize-package-data@~0.1.2",
                              "dependencies": {
                                "github-url-from-git": {
                                  "version": "1.1.1",
                                  "from": "github-url-from-git@~1.1.1"
                                }
                              }
                            }
                          }
                        },
                        "read-installed": {
                          "version": "0.1.1",
                          "from": "read-installed@0"
                        },
                        "glob": {
                          "version": "3.2.1",
                          "from": "glob@3.2.1"
                        },
                        "init-package-json": {
                          "version": "0.0.9",
                          "from": "init-package-json@latest",
                          "dependencies": {
                            "promzard": {
                              "version": "0.2.0",
                              "from": "promzard@~0.2.0"
                            }
                          }
                        },
                        "osenv": {
                          "version": "0.0.3",
                          "from": "osenv@latest"
                        },
                        "lockfile": {
                          "version": "0.3.4",
                          "from": "lockfile@0.3.4"
                        },
                        "retry": {
                          "version": "0.6.0",
                          "from": "retry"
                        },
                        "once": {
                          "version": "1.1.1",
                          "from": "once"
                        },
                        "npmconf": {
                          "version": "0.1.0",
                          "from": "npmconf@latest",
                          "dependencies": {
                            "config-chain": {
                              "version": "1.1.7",
                              "from": "config-chain@~1.1.1",
                              "dependencies": {
                                "proto-list": {
                                  "version": "1.2.2",
                                  "from": "proto-list@~1.2.1"
                                }
                              }
                            }
                          }
                        },
                        "opener": {
                          "version": "1.3.0",
                          "from": "opener@latest"
                        },
                        "chmodr": {
                          "version": "0.1.0",
                          "from": "chmodr@latest"
                        },
                        "cmd-shim": {
                          "version": "1.1.0",
                          "from": "cmd-shim@"
                        },
                        "sha": {
                          "version": "1.0.1",
                          "from": "sha@~1.0.1"
                        },
                        "editor": {
                          "version": "0.0.4",
                          "from": "editor@"
                        },
                        "child-process-close": {
                          "version": "0.1.1",
                          "from": "child-process-close@"
                        },
                        "npm-user-validate": {
                          "version": "0.0.3",
                          "from": "npm-user-validate@0.0.3"
                        },
                        "normalize-package-data": {
                          "version": "0.1.7",
                          "from": "normalize-package-data@0.1.7",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "when": {
                      "version": "2.2.1",
                      "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                    },
                    "graceful-fs": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                    },
                    "usage": {
                      "version": "0.3.9",
                      "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                      "dependencies": {
                        "bindings": {
                          "version": "1.1.1",
                          "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "ebay-app-context": {
          "version": "1.0.2-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                }
              }
            }
          }
        },
        "ebay-raptor-pres": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-raptor-pres/-/ebay-raptor-pres-1.0.0-beta.tgz"
        },
        "english-time": {
          "version": "0.0.3",
          "from": "http://registry.npmjs.org/english-time/-/english-time-0.0.3.tgz"
        },
        "jshint": {
          "version": "2.1.11",
          "from": "http://registry.npmjs.org/jshint/-/jshint-2.1.11.tgz",
          "dependencies": {
            "shelljs": {
              "version": "0.1.4",
              "from": "http://registry.npmjs.org/shelljs/-/shelljs-0.1.4.tgz"
            },
            "underscore": {
              "version": "1.4.4",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
            },
            "cli": {
              "version": "0.4.5",
              "from": "http://registry.npmjs.org/cli/-/cli-0.4.5.tgz",
              "dependencies": {
                "glob": {
                  "version": "3.2.6",
                  "from": "http://registry.npmjs.org/glob/-/glob-3.2.6.tgz",
                  "dependencies": {
                    "inherits": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz"
                    }
                  }
                }
              }
            },
            "minimatch": {
              "version": "0.2.12",
              "from": "http://registry.npmjs.org/minimatch/-/minimatch-0.2.12.tgz",
              "dependencies": {
                "lru-cache": {
                  "version": "2.3.1",
                  "from": "http://registry.npmjs.org/lru-cache/-/lru-cache-2.3.1.tgz"
                },
                "sigmund": {
                  "version": "1.0.0",
                  "from": "http://registry.npmjs.org/sigmund/-/sigmund-1.0.0.tgz"
                }
              }
            },
            "console-browserify": {
              "version": "0.1.6",
              "from": "http://registry.npmjs.org/console-browserify/-/console-browserify-0.1.6.tgz"
            }
          }
        }
      }
    },
    "raptor-optimizer-ready-plugin": {
      "version": "1.1.1",
      "from": "http://registry.npmjs.dev.ebay.com:5984/raptor-optimizer-ready-plugin/-/raptor-optimizer-ready-plugin-1.1.1.tgz",
      "dependencies": {
        "ebay-ready-client": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ready-client/-/ebay-ready-client-1.0.0-beta.tgz"
        }
      }
    },
    "ebay-ui-components": {
      "version": "2.4.16",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ui-components/-/ebay-ui-components-2.4.16.tgz"
    },
    "ebay-i18n": {
      "version": "1.0.0-beta-20130729172531",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-i18n/-/ebay-i18n-1.0.0-beta-20130729172531.tgz"
    },
    "raptor-hot-reload": {
      "version": "0.1.9",
      "from": "http://registry.npmjs.org/raptor-hot-reload/-/raptor-hot-reload-0.1.9.tgz",
      "dependencies": {
        "hot-reload": {
          "version": "1.2.15",
          "from": "http://registry.npmjs.org/hot-reload/-/hot-reload-1.2.15.tgz",
          "dependencies": {
            "directory-walker": {
              "version": "1.2.3",
              "from": "http://registry.npmjs.org/directory-walker/-/directory-walker-1.2.3.tgz"
            },
            "path-filters": {
              "version": "1.0.5",
              "from": "http://registry.npmjs.org/path-filters/-/path-filters-1.0.5.tgz"
            }
          }
        },
        "wrench": {
          "version": "1.5.4",
          "from": "http://registry.npmjs.org/wrench/-/wrench-1.5.4.tgz"
        }
      }
    },
    "socket.io": {
      "version": "0.9.16",
      "from": "http://registry.npmjs.org/socket.io/-/socket.io-0.9.16.tgz",
      "dependencies": {
        "socket.io-client": {
          "version": "0.9.16",
          "from": "http://registry.npmjs.org/socket.io-client/-/socket.io-client-0.9.16.tgz",
          "dependencies": {
            "uglify-js": {
              "version": "1.2.5",
              "from": "http://registry.npmjs.org/uglify-js/-/uglify-js-1.2.5.tgz"
            },
            "ws": {
              "version": "0.4.31",
              "from": "http://registry.npmjs.org/ws/-/ws-0.4.31.tgz",
              "dependencies": {
                "commander": {
                  "version": "0.6.1",
                  "from": "http://registry.npmjs.org/commander/-/commander-0.6.1.tgz"
                },
                "nan": {
                  "version": "0.3.2",
                  "from": "http://registry.npmjs.org/nan/-/nan-0.3.2.tgz"
                },
                "tinycolor": {
                  "version": "0.0.1",
                  "from": "http://registry.npmjs.org/tinycolor/-/tinycolor-0.0.1.tgz"
                },
                "options": {
                  "version": "0.0.5",
                  "from": "http://registry.npmjs.org/options/-/options-0.0.5.tgz"
                }
              }
            },
            "xmlhttprequest": {
              "version": "1.4.2",
              "from": "http://registry.npmjs.org/xmlhttprequest/-/xmlhttprequest-1.4.2.tgz"
            },
            "active-x-obfuscator": {
              "version": "0.0.1",
              "from": "http://registry.npmjs.org/active-x-obfuscator/-/active-x-obfuscator-0.0.1.tgz",
              "dependencies": {
                "zeparser": {
                  "version": "0.0.5",
                  "from": "http://registry.npmjs.org/zeparser/-/zeparser-0.0.5.tgz"
                }
              }
            }
          }
        },
        "policyfile": {
          "version": "0.0.4",
          "from": "http://registry.npmjs.org/policyfile/-/policyfile-0.0.4.tgz"
        },
        "base64id": {
          "version": "0.1.0",
          "from": "http://registry.npmjs.org/base64id/-/base64id-0.1.0.tgz"
        },
        "redis": {
          "version": "0.7.3",
          "from": "http://registry.npmjs.org/redis/-/redis-0.7.3.tgz"
        }
      }
    },
    "cluster2": {
      "version": "0.4.23",
      "from": "cluster2@0.4.23",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        },
        "express": {
          "version": "2.5.11",
          "from": "express@~2.5.11",
          "dependencies": {
            "connect": {
              "version": "1.9.2",
              "from": "connect@1.x",
              "dependencies": {
                "formidable": {
                  "version": "1.0.14",
                  "from": "formidable@1.0.x"
                }
              }
            },
            "mime": {
              "version": "1.2.4",
              "from": "mime@1.2.4"
            },
            "qs": {
              "version": "0.4.2",
              "from": "qs@0.4.x"
            },
            "mkdirp": {
              "version": "0.3.0",
              "from": "mkdirp@0.3.0"
            }
          }
        },
        "ejs": {
          "version": "0.8.4",
          "from": "ejs@~0.8.4"
        },
        "npm": {
          "version": "1.3.14",
          "from": "npm@~1.3.0",
          "dependencies": {
            "semver": {
              "version": "2.2.1",
              "from": "semver@latest"
            },
            "ini": {
              "version": "1.1.0",
              "from": "ini@latest"
            },
            "slide": {
              "version": "1.1.5",
              "from": "slide@latest"
            },
            "abbrev": {
              "version": "1.0.4",
              "from": "abbrev@latest"
            },
            "graceful-fs": {
              "version": "2.0.1",
              "from": "graceful-fs@~2.0.0"
            },
            "minimatch": {
              "version": "0.2.12",
              "from": "minimatch@latest",
              "dependencies": {
                "sigmund": {
                  "version": "1.0.0",
                  "from": "sigmund@~1.0.0"
                }
              }
            },
            "nopt": {
              "version": "2.1.2",
              "from": "nopt@latest"
            },
            "rimraf": {
              "version": "2.2.2",
              "from": "rimraf@2.2.2"
            },
            "request": {
              "version": "2.27.0",
              "from": "request@~2.27.0",
              "dependencies": {
                "qs": {
                  "version": "0.6.5",
                  "from": "qs@~0.6.0"
                },
                "json-stringify-safe": {
                  "version": "5.0.0",
                  "from": "json-stringify-safe@~5.0.0"
                },
                "forever-agent": {
                  "version": "0.5.0",
                  "from": "forever-agent@~0.5.0"
                },
                "tunnel-agent": {
                  "version": "0.3.0",
                  "from": "tunnel-agent@~0.3.0"
                },
                "http-signature": {
                  "version": "0.10.0",
                  "from": "http-signature@~0.10.0",
                  "dependencies": {
                    "assert-plus": {
                      "version": "0.1.2",
                      "from": "assert-plus@0.1.2"
                    },
                    "asn1": {
                      "version": "0.1.11",
                      "from": "asn1@0.1.11"
                    },
                    "ctype": {
                      "version": "0.5.2",
                      "from": "ctype@0.5.2"
                    }
                  }
                },
                "hawk": {
                  "version": "1.0.0",
                  "from": "hawk@~1.0.0",
                  "dependencies": {
                    "hoek": {
                      "version": "0.9.1",
                      "from": "hoek@0.9.x"
                    },
                    "boom": {
                      "version": "0.4.2",
                      "from": "boom@0.4.x"
                    },
                    "cryptiles": {
                      "version": "0.2.2",
                      "from": "cryptiles@0.2.x"
                    },
                    "sntp": {
                      "version": "0.2.4",
                      "from": "sntp@0.2.x"
                    }
                  }
                },
                "aws-sign": {
                  "version": "0.3.0",
                  "from": "aws-sign@~0.3.0"
                },
                "oauth-sign": {
                  "version": "0.3.0",
                  "from": "oauth-sign@~0.3.0"
                },
                "cookie-jar": {
                  "version": "0.3.0",
                  "from": "cookie-jar@~0.3.0"
                },
                "node-uuid": {
                  "version": "1.4.1",
                  "from": "node-uuid@~1.4.0"
                },
                "mime": {
                  "version": "1.2.11",
                  "from": "mime@~1.2.9"
                },
                "form-data": {
                  "version": "0.1.2",
                  "from": "form-data@~0.1.0",
                  "dependencies": {
                    "combined-stream": {
                      "version": "0.0.4",
                      "from": "combined-stream@~0.0.4",
                      "dependencies": {
                        "delayed-stream": {
                          "version": "0.0.5",
                          "from": "delayed-stream@0.0.5"
                        }
                      }
                    },
                    "async": {
                      "version": "0.2.9",
                      "from": "async@~0.2.9"
                    }
                  }
                }
              }
            },
            "which": {
              "version": "1.0.5",
              "from": "which@1"
            },
            "tar": {
              "version": "0.1.18",
              "from": "tar@latest"
            },
            "fstream": {
              "version": "0.1.24",
              "from": "fstream@latest"
            },
            "block-stream": {
              "version": "0.0.7",
              "from": "block-stream@latest"
            },
            "mkdirp": {
              "version": "0.3.5",
              "from": "mkdirp@latest"
            },
            "read": {
              "version": "1.0.5",
              "from": "read@latest",
              "dependencies": {
                "mute-stream": {
                  "version": "0.0.4",
                  "from": "mute-stream@~0.0.4"
                }
              }
            },
            "lru-cache": {
              "version": "2.3.1",
              "from": "lru-cache@2.3.1"
            },
            "node-gyp": {
              "version": "0.11.0",
              "from": "node-gyp@latest"
            },
            "fstream-npm": {
              "version": "0.1.6",
              "from": "fstream-npm@latest",
              "dependencies": {
                "fstream-ignore": {
                  "version": "0.0.7",
                  "from": "fstream-ignore@~0.0.5"
                }
              }
            },
            "uid-number": {
              "version": "0.0.3",
              "from": "../uid-number"
            },
            "archy": {
              "version": "0.0.2",
              "from": "archy@0.0.2"
            },
            "chownr": {
              "version": "0.0.1",
              "from": "../chownr"
            },
            "npmlog": {
              "version": "0.0.6",
              "from": "npmlog@latest"
            },
            "ansi": {
              "version": "0.2.1",
              "from": "ansi@latest"
            },
            "npm-registry-client": {
              "version": "0.2.29",
              "from": "npm-registry-client@latest",
              "dependencies": {
                "couch-login": {
                  "version": "0.1.18",
                  "from": "couch-login@~0.1.18"
                }
              }
            },
            "read-package-json": {
              "version": "1.1.4",
              "from": "read-package-json@latest",
              "dependencies": {
                "normalize-package-data": {
                  "version": "0.2.7",
                  "from": "normalize-package-data@~0.2.7"
                }
              }
            },
            "read-installed": {
              "version": "0.2.4",
              "from": "read-installed@~0.2.2"
            },
            "glob": {
              "version": "3.2.6",
              "from": "glob@latest"
            },
            "init-package-json": {
              "version": "0.0.11",
              "from": "init-package-json@latest",
              "dependencies": {
                "promzard": {
                  "version": "0.2.0",
                  "from": "promzard@~0.2.0"
                }
              }
            },
            "osenv": {
              "version": "0.0.3",
              "from": "osenv@latest"
            },
            "lockfile": {
              "version": "0.4.2",
              "from": "lockfile@0.4.2"
            },
            "retry": {
              "version": "0.6.0",
              "from": "retry"
            },
            "once": {
              "version": "1.3.0",
              "from": "once@latest"
            },
            "npmconf": {
              "version": "0.1.5",
              "from": "npmconf@latest",
              "dependencies": {
                "config-chain": {
                  "version": "1.1.8",
                  "from": "config-chain@~1.1.8",
                  "dependencies": {
                    "proto-list": {
                      "version": "1.2.2",
                      "from": "proto-list@~1.2.1"
                    }
                  }
                }
              }
            },
            "opener": {
              "version": "1.3.0",
              "from": "opener@latest"
            },
            "chmodr": {
              "version": "0.1.0",
              "from": "chmodr@latest"
            },
            "cmd-shim": {
              "version": "1.1.1",
              "from": "cmd-shim@latest"
            },
            "sha": {
              "version": "1.2.3",
              "from": "sha@latest",
              "dependencies": {
                "readable-stream": {
                  "version": "1.0.17",
                  "from": "readable-stream@1.0"
                }
              }
            },
            "editor": {
              "version": "0.0.5",
              "from": "editor@latest"
            },
            "child-process-close": {
              "version": "0.1.1",
              "from": "child-process-close@"
            },
            "npm-user-validate": {
              "version": "0.0.3",
              "from": "npm-user-validate@0.0.3"
            },
            "github-url-from-git": {
              "version": "1.1.1",
              "from": "github-url-from-git@1.1.1"
            },
            "github-url-from-username-repo": {
              "version": "0.0.2",
              "from": "github-url-from-username-repo@"
            },
            "inherits": {
              "version": "2.0.1",
              "from": "inherits@"
            }
          }
        },
        "when": {
          "version": "2.4.0",
          "from": "when@~2.4.0"
        },
        "memwatch": {
          "version": "0.2.2",
          "from": "memwatch@~0.2.2"
        },
        "usage": {
          "version": "0.3.9",
          "from": "usage@~0.3.8",
          "dependencies": {
            "bindings": {
              "version": "1.1.1",
              "from": "bindings@1.x.x"
            }
          }
        }
      }
    },
    "module-config": {
      "version": "1.0.11-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/module-config/-/module-config-1.0.11-beta.tgz",
      "dependencies": {
        "raptor-config": {
          "version": "1.0.8",
          "from": "http://registry.npmjs.dev.ebay.com:5984/raptor-config/-/raptor-config-1.0.8.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "request": {
              "version": "2.22.0",
              "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
              "dependencies": {
                "qs": {
                  "version": "0.6.5",
                  "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                },
                "json-stringify-safe": {
                  "version": "4.0.0",
                  "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                },
                "forever-agent": {
                  "version": "0.5.0",
                  "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                },
                "tunnel-agent": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                },
                "http-signature": {
                  "version": "0.10.0",
                  "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                  "dependencies": {
                    "assert-plus": {
                      "version": "0.1.2",
                      "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                    },
                    "asn1": {
                      "version": "0.1.11",
                      "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                    },
                    "ctype": {
                      "version": "0.5.2",
                      "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                    }
                  }
                },
                "hawk": {
                  "version": "0.13.1",
                  "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                  "dependencies": {
                    "hoek": {
                      "version": "0.8.5",
                      "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                    },
                    "boom": {
                      "version": "0.4.2",
                      "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                        }
                      }
                    },
                    "cryptiles": {
                      "version": "0.2.2",
                      "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                    },
                    "sntp": {
                      "version": "0.2.4",
                      "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                        }
                      }
                    }
                  }
                },
                "aws-sign": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                },
                "oauth-sign": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                },
                "cookie-jar": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                },
                "node-uuid": {
                  "version": "1.4.1",
                  "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                },
                "mime": {
                  "version": "1.2.11",
                  "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                },
                "form-data": {
                  "version": "0.0.8",
                  "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                  "dependencies": {
                    "combined-stream": {
                      "version": "0.0.4",
                      "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                      "dependencies": {
                        "delayed-stream": {
                          "version": "0.0.5",
                          "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                        }
                      }
                    },
                    "async": {
                      "version": "0.2.9",
                      "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "context-config": {
          "version": "0.3.7",
          "from": "http://registry.npmjs.org/context-config/-/context-config-0.3.7.tgz",
          "dependencies": {
            "config": {
              "version": "0.4.32",
              "from": "http://registry.npmjs.org/config/-/config-0.4.32.tgz"
            }
          }
        },
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        }
      }
    },
    "ebay-request-context": {
      "version": "1.0.6-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-request-context/-/ebay-request-context-1.0.6-beta.tgz",
      "dependencies": {
        "locale": {
          "version": "0.0.10",
          "from": "http://registry.npmjs.org/locale/-/locale-0.0.10.tgz"
        },
        "ebay-app-meta": {
          "version": "1.0.3-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "xml2json": {
              "version": "0.3.2",
              "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                }
              }
            },
            "ebay-soa": {
              "version": "1.0.17-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                },
                "soap": {
                  "version": "0.2.10",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
                },
                "ebay-validateinternals": {
                  "version": "1.0.15-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
                  "dependencies": {
                    "ebay-app-context": {
                      "version": "1.0.2-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
                      "dependencies": {
                        "properties": {
                          "version": "0.3.3",
                          "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
                          "dependencies": {
                            "buffered-reader": {
                              "version": "1.0.1",
                              "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                              "dependencies": {
                                "errno-codes": {
                                  "version": "1.0.2",
                                  "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                                }
                              }
                            },
                            "buffered-writer": {
                              "version": "0.2.3",
                              "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                            },
                            "error-provider": {
                              "version": "0.0.6",
                              "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                            }
                          }
                        }
                      }
                    },
                    "ejs": {
                      "version": "0.8.4",
                      "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                    },
                    "moment": {
                      "version": "2.0.0",
                      "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                    },
                    "request": {
                      "version": "2.22.0",
                      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                        },
                        "http-signature": {
                          "version": "0.10.0",
                          "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.2",
                              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                        },
                        "node-uuid": {
                          "version": "1.4.1",
                          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                        },
                        "mime": {
                          "version": "1.2.11",
                          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                            }
                          }
                        }
                      }
                    },
                    "underscore": {
                      "version": "1.4.4",
                      "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                    },
                    "ip": {
                      "version": "0.1.0",
                      "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                    },
                    "npm": {
                      "version": "1.2.32",
                      "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                      "dependencies": {
                        "semver": {
                          "version": "1.1.4",
                          "from": "semver@1.1.4"
                        },
                        "ini": {
                          "version": "1.1.0",
                          "from": "ini@latest"
                        },
                        "slide": {
                          "version": "1.1.4",
                          "from": "slide@latest"
                        },
                        "abbrev": {
                          "version": "1.0.4",
                          "from": "abbrev@latest"
                        },
                        "graceful-fs": {
                          "version": "1.2.2",
                          "from": "graceful-fs@latest"
                        },
                        "minimatch": {
                          "version": "0.2.12",
                          "from": "minimatch@latest",
                          "dependencies": {
                            "sigmund": {
                              "version": "1.0.0",
                              "from": "sigmund@~1.0.0"
                            }
                          }
                        },
                        "nopt": {
                          "version": "2.1.1",
                          "from": "nopt@latest"
                        },
                        "rimraf": {
                          "version": "2.1.4",
                          "from": "rimraf@2"
                        },
                        "request": {
                          "version": "2.21.0",
                          "from": "request@latest",
                          "dependencies": {
                            "qs": {
                              "version": "0.6.5",
                              "from": "qs@~0.6.0"
                            },
                            "json-stringify-safe": {
                              "version": "4.0.0",
                              "from": "json-stringify-safe@~4.0.0"
                            },
                            "forever-agent": {
                              "version": "0.5.0",
                              "from": "forever-agent@~0.5.0"
                            },
                            "tunnel-agent": {
                              "version": "0.3.0",
                              "from": "tunnel-agent@~0.3.0"
                            },
                            "http-signature": {
                              "version": "0.9.11",
                              "from": "http-signature@~0.9.11",
                              "dependencies": {
                                "assert-plus": {
                                  "version": "0.1.2",
                                  "from": "assert-plus@0.1.2"
                                },
                                "asn1": {
                                  "version": "0.1.11",
                                  "from": "asn1@0.1.11"
                                },
                                "ctype": {
                                  "version": "0.5.2",
                                  "from": "ctype@0.5.2"
                                }
                              }
                            },
                            "hawk": {
                              "version": "0.13.1",
                              "from": "hawk@~0.13.0",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.8.5",
                                  "from": "hoek@0.8.x"
                                },
                                "boom": {
                                  "version": "0.4.2",
                                  "from": "boom@0.4.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                },
                                "cryptiles": {
                                  "version": "0.2.1",
                                  "from": "cryptiles@0.2.x"
                                },
                                "sntp": {
                                  "version": "0.2.4",
                                  "from": "sntp@0.2.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                }
                              }
                            },
                            "aws-sign": {
                              "version": "0.3.0",
                              "from": "aws-sign@~0.3.0"
                            },
                            "oauth-sign": {
                              "version": "0.3.0",
                              "from": "oauth-sign@~0.3.0"
                            },
                            "cookie-jar": {
                              "version": "0.3.0",
                              "from": "cookie-jar@~0.3.0"
                            },
                            "node-uuid": {
                              "version": "1.4.0",
                              "from": "node-uuid@~1.4.0"
                            },
                            "mime": {
                              "version": "1.2.9",
                              "from": "mime@~1.2.9"
                            },
                            "form-data": {
                              "version": "0.0.8",
                              "from": "form-data@0.0.8",
                              "dependencies": {
                                "combined-stream": {
                                  "version": "0.0.4",
                                  "from": "combined-stream@~0.0.4",
                                  "dependencies": {
                                    "delayed-stream": {
                                      "version": "0.0.5",
                                      "from": "delayed-stream@0.0.5"
                                    }
                                  }
                                },
                                "async": {
                                  "version": "0.2.9",
                                  "from": "async@~0.2.7"
                                }
                              }
                            }
                          }
                        },
                        "which": {
                          "version": "1.0.5",
                          "from": "which@1"
                        },
                        "tar": {
                          "version": "0.1.17",
                          "from": "tar@0.1.17"
                        },
                        "fstream": {
                          "version": "0.1.22",
                          "from": "fstream@latest"
                        },
                        "block-stream": {
                          "version": "0.0.6",
                          "from": "block-stream@*"
                        },
                        "inherits": {
                          "version": "1.0.0",
                          "from": "git://github.com/isaacs/inherits"
                        },
                        "mkdirp": {
                          "version": "0.3.5",
                          "from": "mkdirp@0.3.5"
                        },
                        "read": {
                          "version": "1.0.4",
                          "from": "read@~1.0.3",
                          "dependencies": {
                            "mute-stream": {
                              "version": "0.0.3",
                              "from": "mute-stream@~0.0.2"
                            }
                          }
                        },
                        "lru-cache": {
                          "version": "2.3.0",
                          "from": "lru-cache@latest"
                        },
                        "node-gyp": {
                          "version": "0.10.0",
                          "from": "node-gyp@latest"
                        },
                        "fstream-npm": {
                          "version": "0.1.4",
                          "from": "fstream-npm@latest",
                          "dependencies": {
                            "fstream-ignore": {
                              "version": "0.0.6",
                              "from": "fstream-ignore@~0.0.5"
                            }
                          }
                        },
                        "uid-number": {
                          "version": "0.0.3",
                          "from": "../uid-number"
                        },
                        "archy": {
                          "version": "0.0.2",
                          "from": "archy@0.0.2"
                        },
                        "chownr": {
                          "version": "0.0.1",
                          "from": "../chownr"
                        },
                        "npmlog": {
                          "version": "0.0.2",
                          "from": "npmlog@0"
                        },
                        "ansi": {
                          "version": "0.1.2",
                          "from": "ansi@~0.1.2"
                        },
                        "npm-registry-client": {
                          "version": "0.2.24",
                          "from": "npm-registry-client@~0.2.22",
                          "dependencies": {
                            "couch-login": {
                              "version": "0.1.17",
                              "from": "couch-login@"
                            }
                          }
                        },
                        "read-package-json": {
                          "version": "0.4.1",
                          "from": "read-package-json@~0.4.1",
                          "dependencies": {
                            "normalize-package-data": {
                              "version": "0.1.6",
                              "from": "normalize-package-data@~0.1.2",
                              "dependencies": {
                                "github-url-from-git": {
                                  "version": "1.1.1",
                                  "from": "github-url-from-git@~1.1.1"
                                }
                              }
                            }
                          }
                        },
                        "read-installed": {
                          "version": "0.1.1",
                          "from": "read-installed@0"
                        },
                        "glob": {
                          "version": "3.2.1",
                          "from": "glob@3.2.1"
                        },
                        "init-package-json": {
                          "version": "0.0.9",
                          "from": "init-package-json@latest",
                          "dependencies": {
                            "promzard": {
                              "version": "0.2.0",
                              "from": "promzard@~0.2.0"
                            }
                          }
                        },
                        "osenv": {
                          "version": "0.0.3",
                          "from": "osenv@latest"
                        },
                        "lockfile": {
                          "version": "0.3.4",
                          "from": "lockfile@0.3.4"
                        },
                        "retry": {
                          "version": "0.6.0",
                          "from": "retry"
                        },
                        "once": {
                          "version": "1.1.1",
                          "from": "once"
                        },
                        "npmconf": {
                          "version": "0.1.0",
                          "from": "npmconf@latest",
                          "dependencies": {
                            "config-chain": {
                              "version": "1.1.7",
                              "from": "config-chain@~1.1.1",
                              "dependencies": {
                                "proto-list": {
                                  "version": "1.2.2",
                                  "from": "proto-list@~1.2.1"
                                }
                              }
                            }
                          }
                        },
                        "opener": {
                          "version": "1.3.0",
                          "from": "opener@latest"
                        },
                        "chmodr": {
                          "version": "0.1.0",
                          "from": "chmodr@latest"
                        },
                        "cmd-shim": {
                          "version": "1.1.0",
                          "from": "cmd-shim@"
                        },
                        "sha": {
                          "version": "1.0.1",
                          "from": "sha@~1.0.1"
                        },
                        "editor": {
                          "version": "0.0.4",
                          "from": "editor@"
                        },
                        "child-process-close": {
                          "version": "0.1.1",
                          "from": "child-process-close@"
                        },
                        "npm-user-validate": {
                          "version": "0.0.3",
                          "from": "npm-user-validate@0.0.3"
                        },
                        "normalize-package-data": {
                          "version": "0.1.7",
                          "from": "normalize-package-data@0.1.7",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "when": {
                      "version": "2.2.1",
                      "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                    },
                    "graceful-fs": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                    },
                    "usage": {
                      "version": "0.3.9",
                      "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                      "dependencies": {
                        "bindings": {
                          "version": "1.1.1",
                          "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "ebay-domainipcheck": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz",
          "dependencies": {
            "ip": {
              "version": "0.1.0",
              "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
            },
            "underscore": {
              "version": "1.4.4",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
            }
          }
        }
      }
    },
    "ebay-cookies": {
      "version": "1.0.11",
      "from": "ebay-cookies@1.0.11",
      "dependencies": {
        "buffer-crc32": {
          "version": "0.2.1",
          "from": "buffer-crc32@~0.2.1"
        }
      }
    },
    "ebay-app-launcher": {
      "version": "1.0.2-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-launcher/-/ebay-app-launcher-1.0.2-beta.tgz",
      "dependencies": {
        "ebay-validateinternals": {
          "version": "1.0.15-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
          "dependencies": {
            "ebay-domainipcheck": {
              "version": "1.0.0-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
            },
            "ejs": {
              "version": "0.8.4",
              "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
            },
            "moment": {
              "version": "2.0.0",
              "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
            },
            "request": {
              "version": "2.22.0",
              "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
              "dependencies": {
                "qs": {
                  "version": "0.6.5",
                  "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                },
                "json-stringify-safe": {
                  "version": "4.0.0",
                  "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                },
                "forever-agent": {
                  "version": "0.5.0",
                  "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                },
                "tunnel-agent": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                },
                "http-signature": {
                  "version": "0.10.0",
                  "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                  "dependencies": {
                    "assert-plus": {
                      "version": "0.1.2",
                      "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                    },
                    "asn1": {
                      "version": "0.1.11",
                      "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                    },
                    "ctype": {
                      "version": "0.5.2",
                      "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                    }
                  }
                },
                "hawk": {
                  "version": "0.13.1",
                  "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                  "dependencies": {
                    "hoek": {
                      "version": "0.8.5",
                      "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                    },
                    "boom": {
                      "version": "0.4.2",
                      "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                        }
                      }
                    },
                    "cryptiles": {
                      "version": "0.2.2",
                      "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                    },
                    "sntp": {
                      "version": "0.2.4",
                      "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                        }
                      }
                    }
                  }
                },
                "aws-sign": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                },
                "oauth-sign": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                },
                "cookie-jar": {
                  "version": "0.3.0",
                  "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                },
                "node-uuid": {
                  "version": "1.4.1",
                  "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                },
                "mime": {
                  "version": "1.2.11",
                  "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                },
                "form-data": {
                  "version": "0.0.8",
                  "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                  "dependencies": {
                    "combined-stream": {
                      "version": "0.0.4",
                      "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                      "dependencies": {
                        "delayed-stream": {
                          "version": "0.0.5",
                          "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                        }
                      }
                    },
                    "async": {
                      "version": "0.2.9",
                      "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                    }
                  }
                }
              }
            },
            "underscore": {
              "version": "1.4.4",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
            },
            "ip": {
              "version": "0.1.0",
              "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
            },
            "npm": {
              "version": "1.2.32",
              "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
              "dependencies": {
                "semver": {
                  "version": "1.1.4",
                  "from": "semver@1.1.4"
                },
                "ini": {
                  "version": "1.1.0",
                  "from": "ini@latest"
                },
                "slide": {
                  "version": "1.1.4",
                  "from": "slide@latest"
                },
                "abbrev": {
                  "version": "1.0.4",
                  "from": "abbrev@latest"
                },
                "graceful-fs": {
                  "version": "1.2.2",
                  "from": "graceful-fs@latest"
                },
                "minimatch": {
                  "version": "0.2.12",
                  "from": "minimatch@latest",
                  "dependencies": {
                    "sigmund": {
                      "version": "1.0.0",
                      "from": "sigmund@~1.0.0"
                    }
                  }
                },
                "nopt": {
                  "version": "2.1.1",
                  "from": "nopt@latest"
                },
                "rimraf": {
                  "version": "2.1.4",
                  "from": "rimraf@2"
                },
                "request": {
                  "version": "2.21.0",
                  "from": "request@latest",
                  "dependencies": {
                    "qs": {
                      "version": "0.6.5",
                      "from": "qs@~0.6.0"
                    },
                    "json-stringify-safe": {
                      "version": "4.0.0",
                      "from": "json-stringify-safe@~4.0.0"
                    },
                    "forever-agent": {
                      "version": "0.5.0",
                      "from": "forever-agent@~0.5.0"
                    },
                    "tunnel-agent": {
                      "version": "0.3.0",
                      "from": "tunnel-agent@~0.3.0"
                    },
                    "http-signature": {
                      "version": "0.9.11",
                      "from": "http-signature@~0.9.11",
                      "dependencies": {
                        "assert-plus": {
                          "version": "0.1.2",
                          "from": "assert-plus@0.1.2"
                        },
                        "asn1": {
                          "version": "0.1.11",
                          "from": "asn1@0.1.11"
                        },
                        "ctype": {
                          "version": "0.5.2",
                          "from": "ctype@0.5.2"
                        }
                      }
                    },
                    "hawk": {
                      "version": "0.13.1",
                      "from": "hawk@~0.13.0",
                      "dependencies": {
                        "hoek": {
                          "version": "0.8.5",
                          "from": "hoek@0.8.x"
                        },
                        "boom": {
                          "version": "0.4.2",
                          "from": "boom@0.4.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        },
                        "cryptiles": {
                          "version": "0.2.1",
                          "from": "cryptiles@0.2.x"
                        },
                        "sntp": {
                          "version": "0.2.4",
                          "from": "sntp@0.2.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        }
                      }
                    },
                    "aws-sign": {
                      "version": "0.3.0",
                      "from": "aws-sign@~0.3.0"
                    },
                    "oauth-sign": {
                      "version": "0.3.0",
                      "from": "oauth-sign@~0.3.0"
                    },
                    "cookie-jar": {
                      "version": "0.3.0",
                      "from": "cookie-jar@~0.3.0"
                    },
                    "node-uuid": {
                      "version": "1.4.0",
                      "from": "node-uuid@~1.4.0"
                    },
                    "mime": {
                      "version": "1.2.9",
                      "from": "mime@~1.2.9"
                    },
                    "form-data": {
                      "version": "0.0.8",
                      "from": "form-data@0.0.8",
                      "dependencies": {
                        "combined-stream": {
                          "version": "0.0.4",
                          "from": "combined-stream@~0.0.4",
                          "dependencies": {
                            "delayed-stream": {
                              "version": "0.0.5",
                              "from": "delayed-stream@0.0.5"
                            }
                          }
                        },
                        "async": {
                          "version": "0.2.9",
                          "from": "async@~0.2.7"
                        }
                      }
                    }
                  }
                },
                "which": {
                  "version": "1.0.5",
                  "from": "which@1"
                },
                "tar": {
                  "version": "0.1.17",
                  "from": "tar@0.1.17"
                },
                "fstream": {
                  "version": "0.1.22",
                  "from": "fstream@latest"
                },
                "block-stream": {
                  "version": "0.0.6",
                  "from": "block-stream@*"
                },
                "inherits": {
                  "version": "1.0.0",
                  "from": "git://github.com/isaacs/inherits"
                },
                "mkdirp": {
                  "version": "0.3.5",
                  "from": "mkdirp@0.3.5"
                },
                "read": {
                  "version": "1.0.4",
                  "from": "read@~1.0.3",
                  "dependencies": {
                    "mute-stream": {
                      "version": "0.0.3",
                      "from": "mute-stream@~0.0.2"
                    }
                  }
                },
                "lru-cache": {
                  "version": "2.3.0",
                  "from": "lru-cache@latest"
                },
                "node-gyp": {
                  "version": "0.10.0",
                  "from": "node-gyp@latest"
                },
                "fstream-npm": {
                  "version": "0.1.4",
                  "from": "fstream-npm@latest",
                  "dependencies": {
                    "fstream-ignore": {
                      "version": "0.0.6",
                      "from": "fstream-ignore@~0.0.5"
                    }
                  }
                },
                "uid-number": {
                  "version": "0.0.3",
                  "from": "../uid-number"
                },
                "archy": {
                  "version": "0.0.2",
                  "from": "archy@0.0.2"
                },
                "chownr": {
                  "version": "0.0.1",
                  "from": "../chownr"
                },
                "npmlog": {
                  "version": "0.0.2",
                  "from": "npmlog@0"
                },
                "ansi": {
                  "version": "0.1.2",
                  "from": "ansi@~0.1.2"
                },
                "npm-registry-client": {
                  "version": "0.2.24",
                  "from": "npm-registry-client@~0.2.22",
                  "dependencies": {
                    "couch-login": {
                      "version": "0.1.17",
                      "from": "couch-login@"
                    }
                  }
                },
                "read-package-json": {
                  "version": "0.4.1",
                  "from": "read-package-json@~0.4.1",
                  "dependencies": {
                    "normalize-package-data": {
                      "version": "0.1.6",
                      "from": "normalize-package-data@~0.1.2",
                      "dependencies": {
                        "github-url-from-git": {
                          "version": "1.1.1",
                          "from": "github-url-from-git@~1.1.1"
                        }
                      }
                    }
                  }
                },
                "read-installed": {
                  "version": "0.1.1",
                  "from": "read-installed@0"
                },
                "glob": {
                  "version": "3.2.1",
                  "from": "glob@3.2.1"
                },
                "init-package-json": {
                  "version": "0.0.9",
                  "from": "init-package-json@latest",
                  "dependencies": {
                    "promzard": {
                      "version": "0.2.0",
                      "from": "promzard@~0.2.0"
                    }
                  }
                },
                "osenv": {
                  "version": "0.0.3",
                  "from": "osenv@latest"
                },
                "lockfile": {
                  "version": "0.3.4",
                  "from": "lockfile@0.3.4"
                },
                "retry": {
                  "version": "0.6.0",
                  "from": "retry"
                },
                "once": {
                  "version": "1.1.1",
                  "from": "once"
                },
                "npmconf": {
                  "version": "0.1.0",
                  "from": "npmconf@latest",
                  "dependencies": {
                    "config-chain": {
                      "version": "1.1.7",
                      "from": "config-chain@~1.1.1",
                      "dependencies": {
                        "proto-list": {
                          "version": "1.2.2",
                          "from": "proto-list@~1.2.1"
                        }
                      }
                    }
                  }
                },
                "opener": {
                  "version": "1.3.0",
                  "from": "opener@latest"
                },
                "chmodr": {
                  "version": "0.1.0",
                  "from": "chmodr@latest"
                },
                "cmd-shim": {
                  "version": "1.1.0",
                  "from": "cmd-shim@"
                },
                "sha": {
                  "version": "1.0.1",
                  "from": "sha@~1.0.1"
                },
                "editor": {
                  "version": "0.0.4",
                  "from": "editor@"
                },
                "child-process-close": {
                  "version": "0.1.1",
                  "from": "child-process-close@"
                },
                "npm-user-validate": {
                  "version": "0.0.3",
                  "from": "npm-user-validate@0.0.3"
                },
                "normalize-package-data": {
                  "version": "0.1.7",
                  "from": "normalize-package-data@0.1.7",
                  "dependencies": {
                    "github-url-from-git": {
                      "version": "1.1.1",
                      "from": "github-url-from-git@~1.1.1"
                    }
                  }
                }
              }
            },
            "when": {
              "version": "2.2.1",
              "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
            },
            "graceful-fs": {
              "version": "2.0.1",
              "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
            },
            "usage": {
              "version": "0.3.9",
              "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
              "dependencies": {
                "bindings": {
                  "version": "1.1.1",
                  "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                }
              }
            }
          }
        },
        "ebay-app-context": {
          "version": "1.0.2-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                }
              }
            }
          }
        }
      }
    },
    "ebay-ep": {
      "version": "1.0.16-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-ep/-/ebay-ep-1.0.16-beta.tgz",
      "dependencies": {
        "ebay-app-meta": {
          "version": "1.0.3-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "xml2json": {
              "version": "0.3.2",
              "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                }
              }
            },
            "ebay-soa": {
              "version": "1.0.17-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                },
                "soap": {
                  "version": "0.2.10",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
                },
                "ebay-validateinternals": {
                  "version": "1.0.15-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
                  "dependencies": {
                    "ebay-domainipcheck": {
                      "version": "1.0.0-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
                    },
                    "ejs": {
                      "version": "0.8.4",
                      "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                    },
                    "moment": {
                      "version": "2.0.0",
                      "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                    },
                    "request": {
                      "version": "2.22.0",
                      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                        },
                        "http-signature": {
                          "version": "0.10.0",
                          "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.2",
                              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                        },
                        "node-uuid": {
                          "version": "1.4.1",
                          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                        },
                        "mime": {
                          "version": "1.2.11",
                          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                            }
                          }
                        }
                      }
                    },
                    "underscore": {
                      "version": "1.4.4",
                      "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                    },
                    "ip": {
                      "version": "0.1.0",
                      "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                    },
                    "npm": {
                      "version": "1.2.32",
                      "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                      "dependencies": {
                        "semver": {
                          "version": "1.1.4",
                          "from": "semver@1.1.4"
                        },
                        "ini": {
                          "version": "1.1.0",
                          "from": "ini@latest"
                        },
                        "slide": {
                          "version": "1.1.4",
                          "from": "slide@latest"
                        },
                        "abbrev": {
                          "version": "1.0.4",
                          "from": "abbrev@latest"
                        },
                        "graceful-fs": {
                          "version": "1.2.2",
                          "from": "graceful-fs@latest"
                        },
                        "minimatch": {
                          "version": "0.2.12",
                          "from": "minimatch@latest",
                          "dependencies": {
                            "sigmund": {
                              "version": "1.0.0",
                              "from": "sigmund@~1.0.0"
                            }
                          }
                        },
                        "nopt": {
                          "version": "2.1.1",
                          "from": "nopt@latest"
                        },
                        "rimraf": {
                          "version": "2.1.4",
                          "from": "rimraf@2"
                        },
                        "request": {
                          "version": "2.21.0",
                          "from": "request@latest",
                          "dependencies": {
                            "qs": {
                              "version": "0.6.5",
                              "from": "qs@~0.6.0"
                            },
                            "json-stringify-safe": {
                              "version": "4.0.0",
                              "from": "json-stringify-safe@~4.0.0"
                            },
                            "forever-agent": {
                              "version": "0.5.0",
                              "from": "forever-agent@~0.5.0"
                            },
                            "tunnel-agent": {
                              "version": "0.3.0",
                              "from": "tunnel-agent@~0.3.0"
                            },
                            "http-signature": {
                              "version": "0.9.11",
                              "from": "http-signature@~0.9.11",
                              "dependencies": {
                                "assert-plus": {
                                  "version": "0.1.2",
                                  "from": "assert-plus@0.1.2"
                                },
                                "asn1": {
                                  "version": "0.1.11",
                                  "from": "asn1@0.1.11"
                                },
                                "ctype": {
                                  "version": "0.5.2",
                                  "from": "ctype@0.5.2"
                                }
                              }
                            },
                            "hawk": {
                              "version": "0.13.1",
                              "from": "hawk@~0.13.0",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.8.5",
                                  "from": "hoek@0.8.x"
                                },
                                "boom": {
                                  "version": "0.4.2",
                                  "from": "boom@0.4.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                },
                                "cryptiles": {
                                  "version": "0.2.1",
                                  "from": "cryptiles@0.2.x"
                                },
                                "sntp": {
                                  "version": "0.2.4",
                                  "from": "sntp@0.2.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                }
                              }
                            },
                            "aws-sign": {
                              "version": "0.3.0",
                              "from": "aws-sign@~0.3.0"
                            },
                            "oauth-sign": {
                              "version": "0.3.0",
                              "from": "oauth-sign@~0.3.0"
                            },
                            "cookie-jar": {
                              "version": "0.3.0",
                              "from": "cookie-jar@~0.3.0"
                            },
                            "node-uuid": {
                              "version": "1.4.0",
                              "from": "node-uuid@~1.4.0"
                            },
                            "mime": {
                              "version": "1.2.9",
                              "from": "mime@~1.2.9"
                            },
                            "form-data": {
                              "version": "0.0.8",
                              "from": "form-data@0.0.8",
                              "dependencies": {
                                "combined-stream": {
                                  "version": "0.0.4",
                                  "from": "combined-stream@~0.0.4",
                                  "dependencies": {
                                    "delayed-stream": {
                                      "version": "0.0.5",
                                      "from": "delayed-stream@0.0.5"
                                    }
                                  }
                                },
                                "async": {
                                  "version": "0.2.9",
                                  "from": "async@~0.2.7"
                                }
                              }
                            }
                          }
                        },
                        "which": {
                          "version": "1.0.5",
                          "from": "which@1"
                        },
                        "tar": {
                          "version": "0.1.17",
                          "from": "tar@0.1.17"
                        },
                        "fstream": {
                          "version": "0.1.22",
                          "from": "fstream@latest"
                        },
                        "block-stream": {
                          "version": "0.0.6",
                          "from": "block-stream@*"
                        },
                        "inherits": {
                          "version": "1.0.0",
                          "from": "git://github.com/isaacs/inherits"
                        },
                        "mkdirp": {
                          "version": "0.3.5",
                          "from": "mkdirp@0.3.5"
                        },
                        "read": {
                          "version": "1.0.4",
                          "from": "read@~1.0.3",
                          "dependencies": {
                            "mute-stream": {
                              "version": "0.0.3",
                              "from": "mute-stream@~0.0.2"
                            }
                          }
                        },
                        "lru-cache": {
                          "version": "2.3.0",
                          "from": "lru-cache@latest"
                        },
                        "node-gyp": {
                          "version": "0.10.0",
                          "from": "node-gyp@latest"
                        },
                        "fstream-npm": {
                          "version": "0.1.4",
                          "from": "fstream-npm@latest",
                          "dependencies": {
                            "fstream-ignore": {
                              "version": "0.0.6",
                              "from": "fstream-ignore@~0.0.5"
                            }
                          }
                        },
                        "uid-number": {
                          "version": "0.0.3",
                          "from": "../uid-number"
                        },
                        "archy": {
                          "version": "0.0.2",
                          "from": "archy@0.0.2"
                        },
                        "chownr": {
                          "version": "0.0.1",
                          "from": "../chownr"
                        },
                        "npmlog": {
                          "version": "0.0.2",
                          "from": "npmlog@0"
                        },
                        "ansi": {
                          "version": "0.1.2",
                          "from": "ansi@~0.1.2"
                        },
                        "npm-registry-client": {
                          "version": "0.2.24",
                          "from": "npm-registry-client@~0.2.22",
                          "dependencies": {
                            "couch-login": {
                              "version": "0.1.17",
                              "from": "couch-login@"
                            }
                          }
                        },
                        "read-package-json": {
                          "version": "0.4.1",
                          "from": "read-package-json@~0.4.1",
                          "dependencies": {
                            "normalize-package-data": {
                              "version": "0.1.6",
                              "from": "normalize-package-data@~0.1.2",
                              "dependencies": {
                                "github-url-from-git": {
                                  "version": "1.1.1",
                                  "from": "github-url-from-git@~1.1.1"
                                }
                              }
                            }
                          }
                        },
                        "read-installed": {
                          "version": "0.1.1",
                          "from": "read-installed@0"
                        },
                        "glob": {
                          "version": "3.2.1",
                          "from": "glob@3.2.1"
                        },
                        "init-package-json": {
                          "version": "0.0.9",
                          "from": "init-package-json@latest",
                          "dependencies": {
                            "promzard": {
                              "version": "0.2.0",
                              "from": "promzard@~0.2.0"
                            }
                          }
                        },
                        "osenv": {
                          "version": "0.0.3",
                          "from": "osenv@latest"
                        },
                        "lockfile": {
                          "version": "0.3.4",
                          "from": "lockfile@0.3.4"
                        },
                        "retry": {
                          "version": "0.6.0",
                          "from": "retry"
                        },
                        "once": {
                          "version": "1.1.1",
                          "from": "once"
                        },
                        "npmconf": {
                          "version": "0.1.0",
                          "from": "npmconf@latest",
                          "dependencies": {
                            "config-chain": {
                              "version": "1.1.7",
                              "from": "config-chain@~1.1.1",
                              "dependencies": {
                                "proto-list": {
                                  "version": "1.2.2",
                                  "from": "proto-list@~1.2.1"
                                }
                              }
                            }
                          }
                        },
                        "opener": {
                          "version": "1.3.0",
                          "from": "opener@latest"
                        },
                        "chmodr": {
                          "version": "0.1.0",
                          "from": "chmodr@latest"
                        },
                        "cmd-shim": {
                          "version": "1.1.0",
                          "from": "cmd-shim@"
                        },
                        "sha": {
                          "version": "1.0.1",
                          "from": "sha@~1.0.1"
                        },
                        "editor": {
                          "version": "0.0.4",
                          "from": "editor@"
                        },
                        "child-process-close": {
                          "version": "0.1.1",
                          "from": "child-process-close@"
                        },
                        "npm-user-validate": {
                          "version": "0.0.3",
                          "from": "npm-user-validate@0.0.3"
                        },
                        "normalize-package-data": {
                          "version": "0.1.7",
                          "from": "normalize-package-data@0.1.7",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "when": {
                      "version": "2.2.1",
                      "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                    },
                    "graceful-fs": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                    },
                    "usage": {
                      "version": "0.3.9",
                      "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                      "dependencies": {
                        "bindings": {
                          "version": "1.1.1",
                          "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "ebay-app-context": {
          "version": "1.0.2-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                }
              }
            }
          }
        }
      }
    },
    "ebay-tracking": {
      "version": "1.0.26-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-tracking/-/ebay-tracking-1.0.26-beta.tgz",
      "dependencies": {
        "ebay-soa": {
          "version": "1.0.17-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
          "dependencies": {
            "node-expat": {
              "version": "2.0.0",
              "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
            },
            "soap": {
              "version": "0.2.10",
              "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
            },
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "ebay-validateinternals": {
              "version": "1.0.15-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
              "dependencies": {
                "ebay-domainipcheck": {
                  "version": "1.0.0-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
                },
                "ejs": {
                  "version": "0.8.4",
                  "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                },
                "moment": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                },
                "request": {
                  "version": "2.22.0",
                  "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                  "dependencies": {
                    "qs": {
                      "version": "0.6.5",
                      "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                    },
                    "json-stringify-safe": {
                      "version": "4.0.0",
                      "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                    },
                    "forever-agent": {
                      "version": "0.5.0",
                      "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                    },
                    "tunnel-agent": {
                      "version": "0.3.0",
                      "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                    },
                    "http-signature": {
                      "version": "0.10.0",
                      "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                      "dependencies": {
                        "assert-plus": {
                          "version": "0.1.2",
                          "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                        },
                        "asn1": {
                          "version": "0.1.11",
                          "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                        },
                        "ctype": {
                          "version": "0.5.2",
                          "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                        }
                      }
                    },
                    "hawk": {
                      "version": "0.13.1",
                      "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                      "dependencies": {
                        "hoek": {
                          "version": "0.8.5",
                          "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                        },
                        "boom": {
                          "version": "0.4.2",
                          "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                            }
                          }
                        },
                        "cryptiles": {
                          "version": "0.2.2",
                          "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                        },
                        "sntp": {
                          "version": "0.2.4",
                          "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                            }
                          }
                        }
                      }
                    },
                    "aws-sign": {
                      "version": "0.3.0",
                      "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                    },
                    "oauth-sign": {
                      "version": "0.3.0",
                      "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                    },
                    "cookie-jar": {
                      "version": "0.3.0",
                      "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                    },
                    "node-uuid": {
                      "version": "1.4.1",
                      "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                    },
                    "mime": {
                      "version": "1.2.11",
                      "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                    },
                    "form-data": {
                      "version": "0.0.8",
                      "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                      "dependencies": {
                        "combined-stream": {
                          "version": "0.0.4",
                          "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                          "dependencies": {
                            "delayed-stream": {
                              "version": "0.0.5",
                              "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                            }
                          }
                        },
                        "async": {
                          "version": "0.2.9",
                          "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                        }
                      }
                    }
                  }
                },
                "underscore": {
                  "version": "1.4.4",
                  "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                },
                "ip": {
                  "version": "0.1.0",
                  "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                },
                "npm": {
                  "version": "1.2.32",
                  "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                  "dependencies": {
                    "semver": {
                      "version": "1.1.4",
                      "from": "semver@1.1.4"
                    },
                    "ini": {
                      "version": "1.1.0",
                      "from": "ini@latest"
                    },
                    "slide": {
                      "version": "1.1.4",
                      "from": "slide@latest"
                    },
                    "abbrev": {
                      "version": "1.0.4",
                      "from": "abbrev@latest"
                    },
                    "graceful-fs": {
                      "version": "1.2.2",
                      "from": "graceful-fs@latest"
                    },
                    "minimatch": {
                      "version": "0.2.12",
                      "from": "minimatch@latest",
                      "dependencies": {
                        "sigmund": {
                          "version": "1.0.0",
                          "from": "sigmund@~1.0.0"
                        }
                      }
                    },
                    "nopt": {
                      "version": "2.1.1",
                      "from": "nopt@latest"
                    },
                    "rimraf": {
                      "version": "2.1.4",
                      "from": "rimraf@2"
                    },
                    "request": {
                      "version": "2.21.0",
                      "from": "request@latest",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "qs@~0.6.0"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "json-stringify-safe@~4.0.0"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "forever-agent@~0.5.0"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "tunnel-agent@~0.3.0"
                        },
                        "http-signature": {
                          "version": "0.9.11",
                          "from": "http-signature@~0.9.11",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "assert-plus@0.1.2"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "asn1@0.1.11"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "ctype@0.5.2"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "hawk@~0.13.0",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "hoek@0.8.x"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "boom@0.4.x",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "hoek@0.9.x"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.1",
                              "from": "cryptiles@0.2.x"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "sntp@0.2.x",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "hoek@0.9.x"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "aws-sign@~0.3.0"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "oauth-sign@~0.3.0"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "cookie-jar@~0.3.0"
                        },
                        "node-uuid": {
                          "version": "1.4.0",
                          "from": "node-uuid@~1.4.0"
                        },
                        "mime": {
                          "version": "1.2.9",
                          "from": "mime@~1.2.9"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "form-data@0.0.8",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "combined-stream@~0.0.4",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "delayed-stream@0.0.5"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "async@~0.2.7"
                            }
                          }
                        }
                      }
                    },
                    "which": {
                      "version": "1.0.5",
                      "from": "which@1"
                    },
                    "tar": {
                      "version": "0.1.17",
                      "from": "tar@0.1.17"
                    },
                    "fstream": {
                      "version": "0.1.22",
                      "from": "fstream@latest"
                    },
                    "block-stream": {
                      "version": "0.0.6",
                      "from": "block-stream@*"
                    },
                    "inherits": {
                      "version": "1.0.0",
                      "from": "git://github.com/isaacs/inherits"
                    },
                    "mkdirp": {
                      "version": "0.3.5",
                      "from": "mkdirp@0.3.5"
                    },
                    "read": {
                      "version": "1.0.4",
                      "from": "read@~1.0.3",
                      "dependencies": {
                        "mute-stream": {
                          "version": "0.0.3",
                          "from": "mute-stream@~0.0.2"
                        }
                      }
                    },
                    "lru-cache": {
                      "version": "2.3.0",
                      "from": "lru-cache@latest"
                    },
                    "node-gyp": {
                      "version": "0.10.0",
                      "from": "node-gyp@latest"
                    },
                    "fstream-npm": {
                      "version": "0.1.4",
                      "from": "fstream-npm@latest",
                      "dependencies": {
                        "fstream-ignore": {
                          "version": "0.0.6",
                          "from": "fstream-ignore@~0.0.5"
                        }
                      }
                    },
                    "uid-number": {
                      "version": "0.0.3",
                      "from": "../uid-number"
                    },
                    "archy": {
                      "version": "0.0.2",
                      "from": "archy@0.0.2"
                    },
                    "chownr": {
                      "version": "0.0.1",
                      "from": "../chownr"
                    },
                    "npmlog": {
                      "version": "0.0.2",
                      "from": "npmlog@0"
                    },
                    "ansi": {
                      "version": "0.1.2",
                      "from": "ansi@~0.1.2"
                    },
                    "npm-registry-client": {
                      "version": "0.2.24",
                      "from": "npm-registry-client@~0.2.22",
                      "dependencies": {
                        "couch-login": {
                          "version": "0.1.17",
                          "from": "couch-login@"
                        }
                      }
                    },
                    "read-package-json": {
                      "version": "0.4.1",
                      "from": "read-package-json@~0.4.1",
                      "dependencies": {
                        "normalize-package-data": {
                          "version": "0.1.6",
                          "from": "normalize-package-data@~0.1.2",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "read-installed": {
                      "version": "0.1.1",
                      "from": "read-installed@0"
                    },
                    "glob": {
                      "version": "3.2.1",
                      "from": "glob@3.2.1"
                    },
                    "init-package-json": {
                      "version": "0.0.9",
                      "from": "init-package-json@latest",
                      "dependencies": {
                        "promzard": {
                          "version": "0.2.0",
                          "from": "promzard@~0.2.0"
                        }
                      }
                    },
                    "osenv": {
                      "version": "0.0.3",
                      "from": "osenv@latest"
                    },
                    "lockfile": {
                      "version": "0.3.4",
                      "from": "lockfile@0.3.4"
                    },
                    "retry": {
                      "version": "0.6.0",
                      "from": "retry"
                    },
                    "once": {
                      "version": "1.1.1",
                      "from": "once"
                    },
                    "npmconf": {
                      "version": "0.1.0",
                      "from": "npmconf@latest",
                      "dependencies": {
                        "config-chain": {
                          "version": "1.1.7",
                          "from": "config-chain@~1.1.1",
                          "dependencies": {
                            "proto-list": {
                              "version": "1.2.2",
                              "from": "proto-list@~1.2.1"
                            }
                          }
                        }
                      }
                    },
                    "opener": {
                      "version": "1.3.0",
                      "from": "opener@latest"
                    },
                    "chmodr": {
                      "version": "0.1.0",
                      "from": "chmodr@latest"
                    },
                    "cmd-shim": {
                      "version": "1.1.0",
                      "from": "cmd-shim@"
                    },
                    "sha": {
                      "version": "1.0.1",
                      "from": "sha@~1.0.1"
                    },
                    "editor": {
                      "version": "0.0.4",
                      "from": "editor@"
                    },
                    "child-process-close": {
                      "version": "0.1.1",
                      "from": "child-process-close@"
                    },
                    "npm-user-validate": {
                      "version": "0.0.3",
                      "from": "npm-user-validate@0.0.3"
                    },
                    "normalize-package-data": {
                      "version": "0.1.7",
                      "from": "normalize-package-data@0.1.7",
                      "dependencies": {
                        "github-url-from-git": {
                          "version": "1.1.1",
                          "from": "github-url-from-git@~1.1.1"
                        }
                      }
                    }
                  }
                },
                "when": {
                  "version": "2.2.1",
                  "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                },
                "graceful-fs": {
                  "version": "2.0.1",
                  "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                },
                "usage": {
                  "version": "0.3.9",
                  "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                  "dependencies": {
                    "bindings": {
                      "version": "1.1.1",
                      "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                    }
                  }
                }
              }
            }
          }
        },
        "trie": {
          "version": "0.2.1",
          "from": "http://registry.npmjs.org/trie/-/trie-0.2.1.tgz"
        },
        "bit-set": {
          "version": "1.0.1",
          "from": "http://registry.npmjs.org/bit-set/-/bit-set-1.0.1.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            }
          }
        },
        "sax": {
          "version": "0.5.5",
          "from": "http://registry.npmjs.org/sax/-/sax-0.5.5.tgz"
        },
        "ebay-app-context": {
          "version": "1.0.2-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                }
              }
            }
          }
        },
        "ebay-app-meta": {
          "version": "1.0.3-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "xml2json": {
              "version": "0.3.2",
              "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                }
              }
            }
          }
        },
        "ebay-raptor-pres": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-raptor-pres/-/ebay-raptor-pres-1.0.0-beta.tgz"
        }
      }
    },
    "ebay-site-speed": {
      "version": "1.0.3-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-site-speed/-/ebay-site-speed-1.0.3-beta.tgz",
      "dependencies": {
        "sax": {
          "version": "0.5.5",
          "from": "http://registry.npmjs.org/sax/-/sax-0.5.5.tgz"
        },
        "ebay-app-meta": {
          "version": "1.0.3-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-meta/-/ebay-app-meta-1.0.3-beta.tgz",
          "dependencies": {
            "underscore": {
              "version": "1.3.3",
              "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
            },
            "xml2json": {
              "version": "0.3.2",
              "from": "http://registry.npmjs.org/xml2json/-/xml2json-0.3.2.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                }
              }
            },
            "ebay-soa": {
              "version": "1.0.17-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                },
                "soap": {
                  "version": "0.2.10",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
                },
                "ebay-validateinternals": {
                  "version": "1.0.15-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
                  "dependencies": {
                    "ebay-domainipcheck": {
                      "version": "1.0.0-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
                    },
                    "ejs": {
                      "version": "0.8.4",
                      "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                    },
                    "moment": {
                      "version": "2.0.0",
                      "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                    },
                    "request": {
                      "version": "2.22.0",
                      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                        },
                        "http-signature": {
                          "version": "0.10.0",
                          "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.2",
                              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                        },
                        "node-uuid": {
                          "version": "1.4.1",
                          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                        },
                        "mime": {
                          "version": "1.2.11",
                          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                            }
                          }
                        }
                      }
                    },
                    "underscore": {
                      "version": "1.4.4",
                      "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                    },
                    "ip": {
                      "version": "0.1.0",
                      "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                    },
                    "npm": {
                      "version": "1.2.32",
                      "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                      "dependencies": {
                        "semver": {
                          "version": "1.1.4",
                          "from": "semver@1.1.4"
                        },
                        "ini": {
                          "version": "1.1.0",
                          "from": "ini@latest"
                        },
                        "slide": {
                          "version": "1.1.4",
                          "from": "slide@latest"
                        },
                        "abbrev": {
                          "version": "1.0.4",
                          "from": "abbrev@latest"
                        },
                        "graceful-fs": {
                          "version": "1.2.2",
                          "from": "graceful-fs@latest"
                        },
                        "minimatch": {
                          "version": "0.2.12",
                          "from": "minimatch@latest",
                          "dependencies": {
                            "sigmund": {
                              "version": "1.0.0",
                              "from": "sigmund@~1.0.0"
                            }
                          }
                        },
                        "nopt": {
                          "version": "2.1.1",
                          "from": "nopt@latest"
                        },
                        "rimraf": {
                          "version": "2.1.4",
                          "from": "rimraf@2"
                        },
                        "request": {
                          "version": "2.21.0",
                          "from": "request@latest",
                          "dependencies": {
                            "qs": {
                              "version": "0.6.5",
                              "from": "qs@~0.6.0"
                            },
                            "json-stringify-safe": {
                              "version": "4.0.0",
                              "from": "json-stringify-safe@~4.0.0"
                            },
                            "forever-agent": {
                              "version": "0.5.0",
                              "from": "forever-agent@~0.5.0"
                            },
                            "tunnel-agent": {
                              "version": "0.3.0",
                              "from": "tunnel-agent@~0.3.0"
                            },
                            "http-signature": {
                              "version": "0.9.11",
                              "from": "http-signature@~0.9.11",
                              "dependencies": {
                                "assert-plus": {
                                  "version": "0.1.2",
                                  "from": "assert-plus@0.1.2"
                                },
                                "asn1": {
                                  "version": "0.1.11",
                                  "from": "asn1@0.1.11"
                                },
                                "ctype": {
                                  "version": "0.5.2",
                                  "from": "ctype@0.5.2"
                                }
                              }
                            },
                            "hawk": {
                              "version": "0.13.1",
                              "from": "hawk@~0.13.0",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.8.5",
                                  "from": "hoek@0.8.x"
                                },
                                "boom": {
                                  "version": "0.4.2",
                                  "from": "boom@0.4.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                },
                                "cryptiles": {
                                  "version": "0.2.1",
                                  "from": "cryptiles@0.2.x"
                                },
                                "sntp": {
                                  "version": "0.2.4",
                                  "from": "sntp@0.2.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                }
                              }
                            },
                            "aws-sign": {
                              "version": "0.3.0",
                              "from": "aws-sign@~0.3.0"
                            },
                            "oauth-sign": {
                              "version": "0.3.0",
                              "from": "oauth-sign@~0.3.0"
                            },
                            "cookie-jar": {
                              "version": "0.3.0",
                              "from": "cookie-jar@~0.3.0"
                            },
                            "node-uuid": {
                              "version": "1.4.0",
                              "from": "node-uuid@~1.4.0"
                            },
                            "mime": {
                              "version": "1.2.9",
                              "from": "mime@~1.2.9"
                            },
                            "form-data": {
                              "version": "0.0.8",
                              "from": "form-data@0.0.8",
                              "dependencies": {
                                "combined-stream": {
                                  "version": "0.0.4",
                                  "from": "combined-stream@~0.0.4",
                                  "dependencies": {
                                    "delayed-stream": {
                                      "version": "0.0.5",
                                      "from": "delayed-stream@0.0.5"
                                    }
                                  }
                                },
                                "async": {
                                  "version": "0.2.9",
                                  "from": "async@~0.2.7"
                                }
                              }
                            }
                          }
                        },
                        "which": {
                          "version": "1.0.5",
                          "from": "which@1"
                        },
                        "tar": {
                          "version": "0.1.17",
                          "from": "tar@0.1.17"
                        },
                        "fstream": {
                          "version": "0.1.22",
                          "from": "fstream@latest"
                        },
                        "block-stream": {
                          "version": "0.0.6",
                          "from": "block-stream@*"
                        },
                        "inherits": {
                          "version": "1.0.0",
                          "from": "git://github.com/isaacs/inherits"
                        },
                        "mkdirp": {
                          "version": "0.3.5",
                          "from": "mkdirp@0.3.5"
                        },
                        "read": {
                          "version": "1.0.4",
                          "from": "read@~1.0.3",
                          "dependencies": {
                            "mute-stream": {
                              "version": "0.0.3",
                              "from": "mute-stream@~0.0.2"
                            }
                          }
                        },
                        "lru-cache": {
                          "version": "2.3.0",
                          "from": "lru-cache@latest"
                        },
                        "node-gyp": {
                          "version": "0.10.0",
                          "from": "node-gyp@latest"
                        },
                        "fstream-npm": {
                          "version": "0.1.4",
                          "from": "fstream-npm@latest",
                          "dependencies": {
                            "fstream-ignore": {
                              "version": "0.0.6",
                              "from": "fstream-ignore@~0.0.5"
                            }
                          }
                        },
                        "uid-number": {
                          "version": "0.0.3",
                          "from": "../uid-number"
                        },
                        "archy": {
                          "version": "0.0.2",
                          "from": "archy@0.0.2"
                        },
                        "chownr": {
                          "version": "0.0.1",
                          "from": "../chownr"
                        },
                        "npmlog": {
                          "version": "0.0.2",
                          "from": "npmlog@0"
                        },
                        "ansi": {
                          "version": "0.1.2",
                          "from": "ansi@~0.1.2"
                        },
                        "npm-registry-client": {
                          "version": "0.2.24",
                          "from": "npm-registry-client@~0.2.22",
                          "dependencies": {
                            "couch-login": {
                              "version": "0.1.17",
                              "from": "couch-login@"
                            }
                          }
                        },
                        "read-package-json": {
                          "version": "0.4.1",
                          "from": "read-package-json@~0.4.1",
                          "dependencies": {
                            "normalize-package-data": {
                              "version": "0.1.6",
                              "from": "normalize-package-data@~0.1.2",
                              "dependencies": {
                                "github-url-from-git": {
                                  "version": "1.1.1",
                                  "from": "github-url-from-git@~1.1.1"
                                }
                              }
                            }
                          }
                        },
                        "read-installed": {
                          "version": "0.1.1",
                          "from": "read-installed@0"
                        },
                        "glob": {
                          "version": "3.2.1",
                          "from": "glob@3.2.1"
                        },
                        "init-package-json": {
                          "version": "0.0.9",
                          "from": "init-package-json@latest",
                          "dependencies": {
                            "promzard": {
                              "version": "0.2.0",
                              "from": "promzard@~0.2.0"
                            }
                          }
                        },
                        "osenv": {
                          "version": "0.0.3",
                          "from": "osenv@latest"
                        },
                        "lockfile": {
                          "version": "0.3.4",
                          "from": "lockfile@0.3.4"
                        },
                        "retry": {
                          "version": "0.6.0",
                          "from": "retry"
                        },
                        "once": {
                          "version": "1.1.1",
                          "from": "once"
                        },
                        "npmconf": {
                          "version": "0.1.0",
                          "from": "npmconf@latest",
                          "dependencies": {
                            "config-chain": {
                              "version": "1.1.7",
                              "from": "config-chain@~1.1.1",
                              "dependencies": {
                                "proto-list": {
                                  "version": "1.2.2",
                                  "from": "proto-list@~1.2.1"
                                }
                              }
                            }
                          }
                        },
                        "opener": {
                          "version": "1.3.0",
                          "from": "opener@latest"
                        },
                        "chmodr": {
                          "version": "0.1.0",
                          "from": "chmodr@latest"
                        },
                        "cmd-shim": {
                          "version": "1.1.0",
                          "from": "cmd-shim@"
                        },
                        "sha": {
                          "version": "1.0.1",
                          "from": "sha@~1.0.1"
                        },
                        "editor": {
                          "version": "0.0.4",
                          "from": "editor@"
                        },
                        "child-process-close": {
                          "version": "0.1.1",
                          "from": "child-process-close@"
                        },
                        "npm-user-validate": {
                          "version": "0.0.3",
                          "from": "npm-user-validate@0.0.3"
                        },
                        "normalize-package-data": {
                          "version": "0.1.7",
                          "from": "normalize-package-data@0.1.7",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "when": {
                      "version": "2.2.1",
                      "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                    },
                    "graceful-fs": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                    },
                    "usage": {
                      "version": "0.3.9",
                      "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                      "dependencies": {
                        "bindings": {
                          "version": "1.1.1",
                          "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "ebay-raptor-pres": {
          "version": "1.0.0-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-raptor-pres/-/ebay-raptor-pres-1.0.0-beta.tgz"
        },
        "ebay-app-context": {
          "version": "1.0.2-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                }
              }
            }
          }
        }
      }
    },
    "ebay-rest-client": {
      "version": "1.0.23-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-rest-client/-/ebay-rest-client-1.0.23-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        },
        "ebay-validateinternals": {
          "version": "1.0.15-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
          "dependencies": {
            "ebay-domainipcheck": {
              "version": "1.0.0-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
            },
            "ebay-app-context": {
              "version": "1.0.2-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
              "dependencies": {
                "properties": {
                  "version": "0.3.3",
                  "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
                  "dependencies": {
                    "buffered-reader": {
                      "version": "1.0.1",
                      "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                      "dependencies": {
                        "errno-codes": {
                          "version": "1.0.2",
                          "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                        }
                      }
                    },
                    "buffered-writer": {
                      "version": "0.2.3",
                      "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                    },
                    "error-provider": {
                      "version": "0.0.6",
                      "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                    }
                  }
                }
              }
            },
            "ejs": {
              "version": "0.8.4",
              "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
            },
            "moment": {
              "version": "2.0.0",
              "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
            },
            "ip": {
              "version": "0.1.0",
              "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
            },
            "npm": {
              "version": "1.2.32",
              "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
              "dependencies": {
                "semver": {
                  "version": "1.1.4",
                  "from": "semver@1.1.4"
                },
                "ini": {
                  "version": "1.1.0",
                  "from": "ini@latest"
                },
                "slide": {
                  "version": "1.1.4",
                  "from": "slide@latest"
                },
                "abbrev": {
                  "version": "1.0.4",
                  "from": "abbrev@latest"
                },
                "graceful-fs": {
                  "version": "1.2.2",
                  "from": "graceful-fs@latest"
                },
                "minimatch": {
                  "version": "0.2.12",
                  "from": "minimatch@latest",
                  "dependencies": {
                    "sigmund": {
                      "version": "1.0.0",
                      "from": "sigmund@~1.0.0"
                    }
                  }
                },
                "nopt": {
                  "version": "2.1.1",
                  "from": "nopt@latest"
                },
                "rimraf": {
                  "version": "2.1.4",
                  "from": "rimraf@2"
                },
                "request": {
                  "version": "2.21.0",
                  "from": "request@latest",
                  "dependencies": {
                    "qs": {
                      "version": "0.6.5",
                      "from": "qs@~0.6.0"
                    },
                    "json-stringify-safe": {
                      "version": "4.0.0",
                      "from": "json-stringify-safe@~4.0.0"
                    },
                    "forever-agent": {
                      "version": "0.5.0",
                      "from": "forever-agent@~0.5.0"
                    },
                    "tunnel-agent": {
                      "version": "0.3.0",
                      "from": "tunnel-agent@~0.3.0"
                    },
                    "http-signature": {
                      "version": "0.9.11",
                      "from": "http-signature@~0.9.11",
                      "dependencies": {
                        "assert-plus": {
                          "version": "0.1.2",
                          "from": "assert-plus@0.1.2"
                        },
                        "asn1": {
                          "version": "0.1.11",
                          "from": "asn1@0.1.11"
                        },
                        "ctype": {
                          "version": "0.5.2",
                          "from": "ctype@0.5.2"
                        }
                      }
                    },
                    "hawk": {
                      "version": "0.13.1",
                      "from": "hawk@~0.13.0",
                      "dependencies": {
                        "hoek": {
                          "version": "0.8.5",
                          "from": "hoek@0.8.x"
                        },
                        "boom": {
                          "version": "0.4.2",
                          "from": "boom@0.4.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        },
                        "cryptiles": {
                          "version": "0.2.1",
                          "from": "cryptiles@0.2.x"
                        },
                        "sntp": {
                          "version": "0.2.4",
                          "from": "sntp@0.2.x",
                          "dependencies": {
                            "hoek": {
                              "version": "0.9.1",
                              "from": "hoek@0.9.x"
                            }
                          }
                        }
                      }
                    },
                    "aws-sign": {
                      "version": "0.3.0",
                      "from": "aws-sign@~0.3.0"
                    },
                    "oauth-sign": {
                      "version": "0.3.0",
                      "from": "oauth-sign@~0.3.0"
                    },
                    "cookie-jar": {
                      "version": "0.3.0",
                      "from": "cookie-jar@~0.3.0"
                    },
                    "node-uuid": {
                      "version": "1.4.0",
                      "from": "node-uuid@~1.4.0"
                    },
                    "mime": {
                      "version": "1.2.9",
                      "from": "mime@~1.2.9"
                    },
                    "form-data": {
                      "version": "0.0.8",
                      "from": "form-data@0.0.8",
                      "dependencies": {
                        "combined-stream": {
                          "version": "0.0.4",
                          "from": "combined-stream@~0.0.4",
                          "dependencies": {
                            "delayed-stream": {
                              "version": "0.0.5",
                              "from": "delayed-stream@0.0.5"
                            }
                          }
                        },
                        "async": {
                          "version": "0.2.9",
                          "from": "async@~0.2.7"
                        }
                      }
                    }
                  }
                },
                "which": {
                  "version": "1.0.5",
                  "from": "which@1"
                },
                "tar": {
                  "version": "0.1.17",
                  "from": "tar@0.1.17"
                },
                "fstream": {
                  "version": "0.1.22",
                  "from": "fstream@latest"
                },
                "block-stream": {
                  "version": "0.0.6",
                  "from": "block-stream@*"
                },
                "inherits": {
                  "version": "1.0.0",
                  "from": "git://github.com/isaacs/inherits"
                },
                "mkdirp": {
                  "version": "0.3.5",
                  "from": "mkdirp@0.3.5"
                },
                "read": {
                  "version": "1.0.4",
                  "from": "read@~1.0.3",
                  "dependencies": {
                    "mute-stream": {
                      "version": "0.0.3",
                      "from": "mute-stream@~0.0.2"
                    }
                  }
                },
                "lru-cache": {
                  "version": "2.3.0",
                  "from": "lru-cache@latest"
                },
                "node-gyp": {
                  "version": "0.10.0",
                  "from": "node-gyp@latest"
                },
                "fstream-npm": {
                  "version": "0.1.4",
                  "from": "fstream-npm@latest",
                  "dependencies": {
                    "fstream-ignore": {
                      "version": "0.0.6",
                      "from": "fstream-ignore@~0.0.5"
                    }
                  }
                },
                "uid-number": {
                  "version": "0.0.3",
                  "from": "../uid-number"
                },
                "archy": {
                  "version": "0.0.2",
                  "from": "archy@0.0.2"
                },
                "chownr": {
                  "version": "0.0.1",
                  "from": "../chownr"
                },
                "npmlog": {
                  "version": "0.0.2",
                  "from": "npmlog@0"
                },
                "ansi": {
                  "version": "0.1.2",
                  "from": "ansi@~0.1.2"
                },
                "npm-registry-client": {
                  "version": "0.2.24",
                  "from": "npm-registry-client@~0.2.22",
                  "dependencies": {
                    "couch-login": {
                      "version": "0.1.17",
                      "from": "couch-login@"
                    }
                  }
                },
                "read-package-json": {
                  "version": "0.4.1",
                  "from": "read-package-json@~0.4.1",
                  "dependencies": {
                    "normalize-package-data": {
                      "version": "0.1.6",
                      "from": "normalize-package-data@~0.1.2",
                      "dependencies": {
                        "github-url-from-git": {
                          "version": "1.1.1",
                          "from": "github-url-from-git@~1.1.1"
                        }
                      }
                    }
                  }
                },
                "read-installed": {
                  "version": "0.1.1",
                  "from": "read-installed@0"
                },
                "glob": {
                  "version": "3.2.1",
                  "from": "glob@3.2.1"
                },
                "init-package-json": {
                  "version": "0.0.9",
                  "from": "init-package-json@latest",
                  "dependencies": {
                    "promzard": {
                      "version": "0.2.0",
                      "from": "promzard@~0.2.0"
                    }
                  }
                },
                "osenv": {
                  "version": "0.0.3",
                  "from": "osenv@latest"
                },
                "lockfile": {
                  "version": "0.3.4",
                  "from": "lockfile@0.3.4"
                },
                "retry": {
                  "version": "0.6.0",
                  "from": "retry"
                },
                "once": {
                  "version": "1.1.1",
                  "from": "once"
                },
                "npmconf": {
                  "version": "0.1.0",
                  "from": "npmconf@latest",
                  "dependencies": {
                    "config-chain": {
                      "version": "1.1.7",
                      "from": "config-chain@~1.1.1",
                      "dependencies": {
                        "proto-list": {
                          "version": "1.2.2",
                          "from": "proto-list@~1.2.1"
                        }
                      }
                    }
                  }
                },
                "opener": {
                  "version": "1.3.0",
                  "from": "opener@latest"
                },
                "chmodr": {
                  "version": "0.1.0",
                  "from": "chmodr@latest"
                },
                "cmd-shim": {
                  "version": "1.1.0",
                  "from": "cmd-shim@"
                },
                "sha": {
                  "version": "1.0.1",
                  "from": "sha@~1.0.1"
                },
                "editor": {
                  "version": "0.0.4",
                  "from": "editor@"
                },
                "child-process-close": {
                  "version": "0.1.1",
                  "from": "child-process-close@"
                },
                "npm-user-validate": {
                  "version": "0.0.3",
                  "from": "npm-user-validate@0.0.3"
                },
                "normalize-package-data": {
                  "version": "0.1.7",
                  "from": "normalize-package-data@0.1.7",
                  "dependencies": {
                    "github-url-from-git": {
                      "version": "1.1.1",
                      "from": "github-url-from-git@~1.1.1"
                    }
                  }
                }
              }
            },
            "when": {
              "version": "2.2.1",
              "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
            },
            "graceful-fs": {
              "version": "2.0.1",
              "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
            },
            "usage": {
              "version": "0.3.9",
              "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
              "dependencies": {
                "bindings": {
                  "version": "1.1.1",
                  "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                }
              }
            }
          }
        },
        "request": {
          "version": "2.22.0",
          "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
          "dependencies": {
            "qs": {
              "version": "0.6.5",
              "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
            },
            "json-stringify-safe": {
              "version": "4.0.0",
              "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
            },
            "forever-agent": {
              "version": "0.5.0",
              "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
            },
            "tunnel-agent": {
              "version": "0.3.0",
              "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
            },
            "http-signature": {
              "version": "0.10.0",
              "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
              "dependencies": {
                "assert-plus": {
                  "version": "0.1.2",
                  "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                },
                "asn1": {
                  "version": "0.1.11",
                  "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                },
                "ctype": {
                  "version": "0.5.2",
                  "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                }
              }
            },
            "hawk": {
              "version": "0.13.1",
              "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
              "dependencies": {
                "hoek": {
                  "version": "0.8.5",
                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                },
                "boom": {
                  "version": "0.4.2",
                  "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                  "dependencies": {
                    "hoek": {
                      "version": "0.9.1",
                      "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                    }
                  }
                },
                "cryptiles": {
                  "version": "0.2.2",
                  "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                },
                "sntp": {
                  "version": "0.2.4",
                  "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                  "dependencies": {
                    "hoek": {
                      "version": "0.9.1",
                      "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                    }
                  }
                }
              }
            },
            "aws-sign": {
              "version": "0.3.0",
              "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
            },
            "oauth-sign": {
              "version": "0.3.0",
              "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
            },
            "cookie-jar": {
              "version": "0.3.0",
              "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
            },
            "node-uuid": {
              "version": "1.4.1",
              "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
            },
            "mime": {
              "version": "1.2.11",
              "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
            },
            "form-data": {
              "version": "0.0.8",
              "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
              "dependencies": {
                "combined-stream": {
                  "version": "0.0.4",
                  "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                  "dependencies": {
                    "delayed-stream": {
                      "version": "0.0.5",
                      "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                    }
                  }
                },
                "async": {
                  "version": "0.2.9",
                  "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                }
              }
            }
          }
        }
      }
    },
    "ebay-logging-client": {
      "version": "1.0.17-beta",
      "from": "ebay-logging-client@1.0.17-beta",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        },
        "ip": {
          "version": "0.1.0",
          "from": "ip@~0.1.0"
        },
        "node-uuid": {
          "version": "1.4.1",
          "from": "node-uuid@~1.4.0"
        },
        "async-logging": {
          "version": "0.1.21",
          "from": "async-logging@~0.1.6",
          "dependencies": {
            "websocket": {
              "version": "1.0.8",
              "from": "websocket@~1.0.8"
            },
            "msgpack": {
              "version": "0.1.8",
              "from": "msgpack@0.1.8"
            },
            "winston": {
              "version": "0.7.2",
              "from": "winston@~0.7.1",
              "dependencies": {
                "async": {
                  "version": "0.2.9",
                  "from": "async@0.2.x"
                },
                "colors": {
                  "version": "0.6.2",
                  "from": "colors@0.6.x"
                },
                "cycle": {
                  "version": "1.0.2",
                  "from": "cycle@1.0.x"
                },
                "eyes": {
                  "version": "0.1.8",
                  "from": "eyes@0.1.x"
                },
                "pkginfo": {
                  "version": "0.3.0",
                  "from": "pkginfo@0.3.x"
                },
                "request": {
                  "version": "2.16.6",
                  "from": "request@2.16.x",
                  "dependencies": {
                    "form-data": {
                      "version": "0.0.10",
                      "from": "form-data@~0.0.3",
                      "dependencies": {
                        "combined-stream": {
                          "version": "0.0.4",
                          "from": "combined-stream@~0.0.4",
                          "dependencies": {
                            "delayed-stream": {
                              "version": "0.0.5",
                              "from": "delayed-stream@0.0.5"
                            }
                          }
                        }
                      }
                    },
                    "mime": {
                      "version": "1.2.11",
                      "from": "mime@~1.2.7"
                    },
                    "hawk": {
                      "version": "0.10.2",
                      "from": "hawk@~0.10.2",
                      "dependencies": {
                        "hoek": {
                          "version": "0.7.6",
                          "from": "hoek@0.7.x"
                        },
                        "boom": {
                          "version": "0.3.8",
                          "from": "boom@0.3.x"
                        },
                        "cryptiles": {
                          "version": "0.1.3",
                          "from": "cryptiles@0.1.x"
                        },
                        "sntp": {
                          "version": "0.1.4",
                          "from": "sntp@0.1.x"
                        }
                      }
                    },
                    "cookie-jar": {
                      "version": "0.2.0",
                      "from": "cookie-jar@~0.2.0"
                    },
                    "aws-sign": {
                      "version": "0.2.0",
                      "from": "aws-sign@~0.2.0"
                    },
                    "oauth-sign": {
                      "version": "0.2.0",
                      "from": "oauth-sign@~0.2.0"
                    },
                    "forever-agent": {
                      "version": "0.2.0",
                      "from": "forever-agent@~0.2.0"
                    },
                    "tunnel-agent": {
                      "version": "0.2.0",
                      "from": "tunnel-agent@~0.2.0"
                    },
                    "json-stringify-safe": {
                      "version": "3.0.0",
                      "from": "json-stringify-safe@~3.0.0"
                    },
                    "qs": {
                      "version": "0.5.6",
                      "from": "qs@~0.5.4"
                    }
                  }
                },
                "stack-trace": {
                  "version": "0.0.7",
                  "from": "stack-trace@0.0.x"
                }
              }
            },
            "request": {
              "version": "2.22.0",
              "from": "request@~2.22.0",
              "dependencies": {
                "qs": {
                  "version": "0.6.5",
                  "from": "qs@~0.6.0"
                },
                "json-stringify-safe": {
                  "version": "4.0.0",
                  "from": "json-stringify-safe@~4.0.0"
                },
                "forever-agent": {
                  "version": "0.5.0",
                  "from": "forever-agent@~0.5.0"
                },
                "tunnel-agent": {
                  "version": "0.3.0",
                  "from": "tunnel-agent@~0.3.0"
                },
                "http-signature": {
                  "version": "0.10.0",
                  "from": "http-signature@~0.10.0",
                  "dependencies": {
                    "assert-plus": {
                      "version": "0.1.2",
                      "from": "assert-plus@0.1.2"
                    },
                    "asn1": {
                      "version": "0.1.11",
                      "from": "asn1@0.1.11"
                    },
                    "ctype": {
                      "version": "0.5.2",
                      "from": "ctype@0.5.2"
                    }
                  }
                },
                "hawk": {
                  "version": "0.13.1",
                  "from": "hawk@~0.13.0",
                  "dependencies": {
                    "hoek": {
                      "version": "0.8.5",
                      "from": "hoek@0.8.x"
                    },
                    "boom": {
                      "version": "0.4.2",
                      "from": "boom@0.4.x",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "hoek@0.9.x"
                        }
                      }
                    },
                    "cryptiles": {
                      "version": "0.2.2",
                      "from": "cryptiles@0.2.x"
                    },
                    "sntp": {
                      "version": "0.2.4",
                      "from": "sntp@0.2.x",
                      "dependencies": {
                        "hoek": {
                          "version": "0.9.1",
                          "from": "hoek@0.9.x"
                        }
                      }
                    }
                  }
                },
                "aws-sign": {
                  "version": "0.3.0",
                  "from": "aws-sign@~0.3.0"
                },
                "oauth-sign": {
                  "version": "0.3.0",
                  "from": "oauth-sign@~0.3.0"
                },
                "cookie-jar": {
                  "version": "0.3.0",
                  "from": "cookie-jar@~0.3.0"
                },
                "mime": {
                  "version": "1.2.11",
                  "from": "mime@~1.2.7"
                },
                "form-data": {
                  "version": "0.0.8",
                  "from": "form-data@0.0.8",
                  "dependencies": {
                    "combined-stream": {
                      "version": "0.0.4",
                      "from": "combined-stream@~0.0.4",
                      "dependencies": {
                        "delayed-stream": {
                          "version": "0.0.5",
                          "from": "delayed-stream@0.0.5"
                        }
                      }
                    },
                    "async": {
                      "version": "0.2.9",
                      "from": "async@~0.2.7"
                    }
                  }
                }
              }
            },
            "connect": {
              "version": "2.7.11",
              "from": "connect@~2.7.5",
              "dependencies": {
                "qs": {
                  "version": "0.6.5",
                  "from": "qs@~0.6.0"
                },
                "formidable": {
                  "version": "1.0.14",
                  "from": "formidable@1.0.14"
                },
                "cookie-signature": {
                  "version": "1.0.1",
                  "from": "cookie-signature@1.0.1"
                },
                "buffer-crc32": {
                  "version": "0.2.1",
                  "from": "buffer-crc32@0.2.1"
                },
                "cookie": {
                  "version": "0.0.5",
                  "from": "cookie@0.0.5"
                },
                "send": {
                  "version": "0.1.1",
                  "from": "send@0.1.1",
                  "dependencies": {
                    "mime": {
                      "version": "1.2.11",
                      "from": "mime@~1.2.9"
                    },
                    "range-parser": {
                      "version": "0.0.4",
                      "from": "range-parser@0.0.4"
                    }
                  }
                },
                "bytes": {
                  "version": "0.2.0",
                  "from": "bytes@0.2.0"
                },
                "fresh": {
                  "version": "0.1.0",
                  "from": "fresh@0.1.0"
                },
                "pause": {
                  "version": "0.0.1",
                  "from": "pause@0.0.1"
                },
                "debug": {
                  "version": "0.7.4",
                  "from": "debug@*"
                }
              }
            }
          }
        },
        "ebay-app-context": {
          "version": "1.0.1-beta",
          "from": "ebay-app-context@~1.0.0-beta",
          "dependencies": {
            "properties": {
              "version": "0.3.3",
              "from": "properties@0.3.3",
              "dependencies": {
                "buffered-reader": {
                  "version": "1.0.1",
                  "from": "buffered-reader@*",
                  "dependencies": {
                    "errno-codes": {
                      "version": "1.0.2",
                      "from": "errno-codes@*"
                    }
                  }
                },
                "buffered-writer": {
                  "version": "0.2.3",
                  "from": "buffered-writer@*"
                },
                "error-provider": {
                  "version": "0.0.6",
                  "from": "error-provider@*"
                }
              }
            }
          }
        }
      }
    },
    "ebay-error": {
      "version": "1.0.0-beta",
      "from": "ebay-error@1.0.0-beta",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "underscore@~1.4.4"
        }
      }
    },
    "ebay-guid": {
      "version": "1.0.3-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-guid/-/ebay-guid-1.0.3-beta.tgz"
    },
    "q": {
      "version": "0.9.6",
      "from": "http://registry.npmjs.org/q/-/q-0.9.6.tgz"
    },
    "underscore": {
      "version": "1.5.2",
      "from": "http://registry.npmjs.org/underscore/-/underscore-1.5.2.tgz"
    },
    "tours-lib": {
      "version": "0.0.4",
      "from": "http://registry.npmjs.dev.ebay.com:5984/tours-lib/-/tours-lib-0.0.4.tgz"
    },
    "ebay-csrf": {
      "version": "1.0.4-beta",
      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-csrf/-/ebay-csrf-1.0.4-beta.tgz",
      "dependencies": {
        "underscore": {
          "version": "1.4.4",
          "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
        },
        "ebay-esams-consumer": {
          "version": "1.0.10-beta",
          "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-esams-consumer/-/ebay-esams-consumer-1.0.10-beta.tgz",
          "dependencies": {
            "ebay-soa": {
              "version": "1.0.17-beta",
              "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-soa/-/ebay-soa-1.0.17-beta.tgz",
              "dependencies": {
                "node-expat": {
                  "version": "2.0.0",
                  "from": "http://registry.npmjs.org/node-expat/-/node-expat-2.0.0.tgz"
                },
                "soap": {
                  "version": "0.2.10",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/soap/-/soap-0.2.10.tgz"
                },
                "underscore": {
                  "version": "1.3.3",
                  "from": "http://registry.npmjs.org/underscore/-/underscore-1.3.3.tgz"
                },
                "ebay-validateinternals": {
                  "version": "1.0.15-beta",
                  "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-validateinternals/-/ebay-validateinternals-1.0.15-beta.tgz",
                  "dependencies": {
                    "ebay-domainipcheck": {
                      "version": "1.0.0-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-domainipcheck/-/ebay-domainipcheck-1.0.0-beta.tgz"
                    },
                    "ebay-app-context": {
                      "version": "1.0.2-beta",
                      "from": "http://registry.npmjs.dev.ebay.com:5984/ebay-app-context/-/ebay-app-context-1.0.2-beta.tgz",
                      "dependencies": {
                        "properties": {
                          "version": "0.3.3",
                          "from": "http://registry.npmjs.org/properties/-/properties-0.3.3.tgz",
                          "dependencies": {
                            "buffered-reader": {
                              "version": "1.0.1",
                              "from": "http://registry.npmjs.org/buffered-reader/-/buffered-reader-1.0.1.tgz",
                              "dependencies": {
                                "errno-codes": {
                                  "version": "1.0.2",
                                  "from": "http://registry.npmjs.org/errno-codes/-/errno-codes-1.0.2.tgz"
                                }
                              }
                            },
                            "buffered-writer": {
                              "version": "0.2.3",
                              "from": "http://registry.npmjs.org/buffered-writer/-/buffered-writer-0.2.3.tgz"
                            },
                            "error-provider": {
                              "version": "0.0.6",
                              "from": "http://registry.npmjs.org/error-provider/-/error-provider-0.0.6.tgz"
                            }
                          }
                        }
                      }
                    },
                    "ejs": {
                      "version": "0.8.4",
                      "from": "http://registry.npmjs.org/ejs/-/ejs-0.8.4.tgz"
                    },
                    "moment": {
                      "version": "2.0.0",
                      "from": "http://registry.npmjs.org/moment/-/moment-2.0.0.tgz"
                    },
                    "request": {
                      "version": "2.22.0",
                      "from": "http://registry.npmjs.org/request/-/request-2.22.0.tgz",
                      "dependencies": {
                        "qs": {
                          "version": "0.6.5",
                          "from": "http://registry.npmjs.org/qs/-/qs-0.6.5.tgz"
                        },
                        "json-stringify-safe": {
                          "version": "4.0.0",
                          "from": "http://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-4.0.0.tgz"
                        },
                        "forever-agent": {
                          "version": "0.5.0",
                          "from": "http://registry.npmjs.org/forever-agent/-/forever-agent-0.5.0.tgz"
                        },
                        "tunnel-agent": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.3.0.tgz"
                        },
                        "http-signature": {
                          "version": "0.10.0",
                          "from": "http://registry.npmjs.org/http-signature/-/http-signature-0.10.0.tgz",
                          "dependencies": {
                            "assert-plus": {
                              "version": "0.1.2",
                              "from": "http://registry.npmjs.org/assert-plus/-/assert-plus-0.1.2.tgz"
                            },
                            "asn1": {
                              "version": "0.1.11",
                              "from": "http://registry.npmjs.org/asn1/-/asn1-0.1.11.tgz"
                            },
                            "ctype": {
                              "version": "0.5.2",
                              "from": "http://registry.npmjs.org/ctype/-/ctype-0.5.2.tgz"
                            }
                          }
                        },
                        "hawk": {
                          "version": "0.13.1",
                          "from": "http://registry.npmjs.org/hawk/-/hawk-0.13.1.tgz",
                          "dependencies": {
                            "hoek": {
                              "version": "0.8.5",
                              "from": "http://registry.npmjs.org/hoek/-/hoek-0.8.5.tgz"
                            },
                            "boom": {
                              "version": "0.4.2",
                              "from": "http://registry.npmjs.org/boom/-/boom-0.4.2.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            },
                            "cryptiles": {
                              "version": "0.2.2",
                              "from": "http://registry.npmjs.org/cryptiles/-/cryptiles-0.2.2.tgz"
                            },
                            "sntp": {
                              "version": "0.2.4",
                              "from": "http://registry.npmjs.org/sntp/-/sntp-0.2.4.tgz",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.9.1",
                                  "from": "http://registry.npmjs.org/hoek/-/hoek-0.9.1.tgz"
                                }
                              }
                            }
                          }
                        },
                        "aws-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/aws-sign/-/aws-sign-0.3.0.tgz"
                        },
                        "oauth-sign": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/oauth-sign/-/oauth-sign-0.3.0.tgz"
                        },
                        "cookie-jar": {
                          "version": "0.3.0",
                          "from": "http://registry.npmjs.org/cookie-jar/-/cookie-jar-0.3.0.tgz"
                        },
                        "node-uuid": {
                          "version": "1.4.1",
                          "from": "http://registry.npmjs.org/node-uuid/-/node-uuid-1.4.1.tgz"
                        },
                        "mime": {
                          "version": "1.2.11",
                          "from": "http://registry.npmjs.org/mime/-/mime-1.2.11.tgz"
                        },
                        "form-data": {
                          "version": "0.0.8",
                          "from": "http://registry.npmjs.org/form-data/-/form-data-0.0.8.tgz",
                          "dependencies": {
                            "combined-stream": {
                              "version": "0.0.4",
                              "from": "http://registry.npmjs.org/combined-stream/-/combined-stream-0.0.4.tgz",
                              "dependencies": {
                                "delayed-stream": {
                                  "version": "0.0.5",
                                  "from": "http://registry.npmjs.org/delayed-stream/-/delayed-stream-0.0.5.tgz"
                                }
                              }
                            },
                            "async": {
                              "version": "0.2.9",
                              "from": "http://registry.npmjs.org/async/-/async-0.2.9.tgz"
                            }
                          }
                        }
                      }
                    },
                    "underscore": {
                      "version": "1.4.4",
                      "from": "http://registry.npmjs.org/underscore/-/underscore-1.4.4.tgz"
                    },
                    "ip": {
                      "version": "0.1.0",
                      "from": "http://registry.npmjs.org/ip/-/ip-0.1.0.tgz"
                    },
                    "npm": {
                      "version": "1.2.32",
                      "from": "http://registry.npmjs.org/npm/-/npm-1.2.32.tgz",
                      "dependencies": {
                        "semver": {
                          "version": "1.1.4",
                          "from": "semver@1.1.4"
                        },
                        "ini": {
                          "version": "1.1.0",
                          "from": "ini@latest"
                        },
                        "slide": {
                          "version": "1.1.4",
                          "from": "slide@latest"
                        },
                        "abbrev": {
                          "version": "1.0.4",
                          "from": "abbrev@latest"
                        },
                        "graceful-fs": {
                          "version": "1.2.2",
                          "from": "graceful-fs@latest"
                        },
                        "minimatch": {
                          "version": "0.2.12",
                          "from": "minimatch@latest",
                          "dependencies": {
                            "sigmund": {
                              "version": "1.0.0",
                              "from": "sigmund@~1.0.0"
                            }
                          }
                        },
                        "nopt": {
                          "version": "2.1.1",
                          "from": "nopt@latest"
                        },
                        "rimraf": {
                          "version": "2.1.4",
                          "from": "rimraf@2"
                        },
                        "request": {
                          "version": "2.21.0",
                          "from": "request@latest",
                          "dependencies": {
                            "qs": {
                              "version": "0.6.5",
                              "from": "qs@~0.6.0"
                            },
                            "json-stringify-safe": {
                              "version": "4.0.0",
                              "from": "json-stringify-safe@~4.0.0"
                            },
                            "forever-agent": {
                              "version": "0.5.0",
                              "from": "forever-agent@~0.5.0"
                            },
                            "tunnel-agent": {
                              "version": "0.3.0",
                              "from": "tunnel-agent@~0.3.0"
                            },
                            "http-signature": {
                              "version": "0.9.11",
                              "from": "http-signature@~0.9.11",
                              "dependencies": {
                                "assert-plus": {
                                  "version": "0.1.2",
                                  "from": "assert-plus@0.1.2"
                                },
                                "asn1": {
                                  "version": "0.1.11",
                                  "from": "asn1@0.1.11"
                                },
                                "ctype": {
                                  "version": "0.5.2",
                                  "from": "ctype@0.5.2"
                                }
                              }
                            },
                            "hawk": {
                              "version": "0.13.1",
                              "from": "hawk@~0.13.0",
                              "dependencies": {
                                "hoek": {
                                  "version": "0.8.5",
                                  "from": "hoek@0.8.x"
                                },
                                "boom": {
                                  "version": "0.4.2",
                                  "from": "boom@0.4.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                },
                                "cryptiles": {
                                  "version": "0.2.1",
                                  "from": "cryptiles@0.2.x"
                                },
                                "sntp": {
                                  "version": "0.2.4",
                                  "from": "sntp@0.2.x",
                                  "dependencies": {
                                    "hoek": {
                                      "version": "0.9.1",
                                      "from": "hoek@0.9.x"
                                    }
                                  }
                                }
                              }
                            },
                            "aws-sign": {
                              "version": "0.3.0",
                              "from": "aws-sign@~0.3.0"
                            },
                            "oauth-sign": {
                              "version": "0.3.0",
                              "from": "oauth-sign@~0.3.0"
                            },
                            "cookie-jar": {
                              "version": "0.3.0",
                              "from": "cookie-jar@~0.3.0"
                            },
                            "node-uuid": {
                              "version": "1.4.0",
                              "from": "node-uuid@~1.4.0"
                            },
                            "mime": {
                              "version": "1.2.9",
                              "from": "mime@~1.2.9"
                            },
                            "form-data": {
                              "version": "0.0.8",
                              "from": "form-data@0.0.8",
                              "dependencies": {
                                "combined-stream": {
                                  "version": "0.0.4",
                                  "from": "combined-stream@~0.0.4",
                                  "dependencies": {
                                    "delayed-stream": {
                                      "version": "0.0.5",
                                      "from": "delayed-stream@0.0.5"
                                    }
                                  }
                                },
                                "async": {
                                  "version": "0.2.9",
                                  "from": "async@~0.2.7"
                                }
                              }
                            }
                          }
                        },
                        "which": {
                          "version": "1.0.5",
                          "from": "which@1"
                        },
                        "tar": {
                          "version": "0.1.17",
                          "from": "tar@0.1.17"
                        },
                        "fstream": {
                          "version": "0.1.22",
                          "from": "fstream@latest"
                        },
                        "block-stream": {
                          "version": "0.0.6",
                          "from": "block-stream@*"
                        },
                        "inherits": {
                          "version": "1.0.0",
                          "from": "git://github.com/isaacs/inherits"
                        },
                        "mkdirp": {
                          "version": "0.3.5",
                          "from": "mkdirp@0.3.5"
                        },
                        "read": {
                          "version": "1.0.4",
                          "from": "read@~1.0.3",
                          "dependencies": {
                            "mute-stream": {
                              "version": "0.0.3",
                              "from": "mute-stream@~0.0.2"
                            }
                          }
                        },
                        "lru-cache": {
                          "version": "2.3.0",
                          "from": "lru-cache@latest"
                        },
                        "node-gyp": {
                          "version": "0.10.0",
                          "from": "node-gyp@latest"
                        },
                        "fstream-npm": {
                          "version": "0.1.4",
                          "from": "fstream-npm@latest",
                          "dependencies": {
                            "fstream-ignore": {
                              "version": "0.0.6",
                              "from": "fstream-ignore@~0.0.5"
                            }
                          }
                        },
                        "uid-number": {
                          "version": "0.0.3",
                          "from": "../uid-number"
                        },
                        "archy": {
                          "version": "0.0.2",
                          "from": "archy@0.0.2"
                        },
                        "chownr": {
                          "version": "0.0.1",
                          "from": "../chownr"
                        },
                        "npmlog": {
                          "version": "0.0.2",
                          "from": "npmlog@0"
                        },
                        "ansi": {
                          "version": "0.1.2",
                          "from": "ansi@~0.1.2"
                        },
                        "npm-registry-client": {
                          "version": "0.2.24",
                          "from": "npm-registry-client@~0.2.22",
                          "dependencies": {
                            "couch-login": {
                              "version": "0.1.17",
                              "from": "couch-login@"
                            }
                          }
                        },
                        "read-package-json": {
                          "version": "0.4.1",
                          "from": "read-package-json@~0.4.1",
                          "dependencies": {
                            "normalize-package-data": {
                              "version": "0.1.6",
                              "from": "normalize-package-data@~0.1.2",
                              "dependencies": {
                                "github-url-from-git": {
                                  "version": "1.1.1",
                                  "from": "github-url-from-git@~1.1.1"
                                }
                              }
                            }
                          }
                        },
                        "read-installed": {
                          "version": "0.1.1",
                          "from": "read-installed@0"
                        },
                        "glob": {
                          "version": "3.2.1",
                          "from": "glob@3.2.1"
                        },
                        "init-package-json": {
                          "version": "0.0.9",
                          "from": "init-package-json@latest",
                          "dependencies": {
                            "promzard": {
                              "version": "0.2.0",
                              "from": "promzard@~0.2.0"
                            }
                          }
                        },
                        "osenv": {
                          "version": "0.0.3",
                          "from": "osenv@latest"
                        },
                        "lockfile": {
                          "version": "0.3.4",
                          "from": "lockfile@0.3.4"
                        },
                        "retry": {
                          "version": "0.6.0",
                          "from": "retry"
                        },
                        "once": {
                          "version": "1.1.1",
                          "from": "once"
                        },
                        "npmconf": {
                          "version": "0.1.0",
                          "from": "npmconf@latest",
                          "dependencies": {
                            "config-chain": {
                              "version": "1.1.7",
                              "from": "config-chain@~1.1.1",
                              "dependencies": {
                                "proto-list": {
                                  "version": "1.2.2",
                                  "from": "proto-list@~1.2.1"
                                }
                              }
                            }
                          }
                        },
                        "opener": {
                          "version": "1.3.0",
                          "from": "opener@latest"
                        },
                        "chmodr": {
                          "version": "0.1.0",
                          "from": "chmodr@latest"
                        },
                        "cmd-shim": {
                          "version": "1.1.0",
                          "from": "cmd-shim@"
                        },
                        "sha": {
                          "version": "1.0.1",
                          "from": "sha@~1.0.1"
                        },
                        "editor": {
                          "version": "0.0.4",
                          "from": "editor@"
                        },
                        "child-process-close": {
                          "version": "0.1.1",
                          "from": "child-process-close@"
                        },
                        "npm-user-validate": {
                          "version": "0.0.3",
                          "from": "npm-user-validate@0.0.3"
                        },
                        "normalize-package-data": {
                          "version": "0.1.7",
                          "from": "normalize-package-data@0.1.7",
                          "dependencies": {
                            "github-url-from-git": {
                              "version": "1.1.1",
                              "from": "github-url-from-git@~1.1.1"
                            }
                          }
                        }
                      }
                    },
                    "when": {
                      "version": "2.2.1",
                      "from": "http://registry.npmjs.org/when/-/when-2.2.1.tgz"
                    },
                    "graceful-fs": {
                      "version": "2.0.1",
                      "from": "http://registry.npmjs.org/graceful-fs/-/graceful-fs-2.0.1.tgz"
                    },
                    "usage": {
                      "version": "0.3.9",
                      "from": "http://registry.npmjs.org/usage/-/usage-0.3.9.tgz",
                      "dependencies": {
                        "bindings": {
                          "version": "1.1.1",
                          "from": "http://registry.npmjs.org/bindings/-/bindings-1.1.1.tgz"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
~~~
