/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class ConnectorsApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public connectorsListGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Connector>> {
            var path = this.basePath + '/connectors/list';

            var queryParameters: any = {};
            var headerParams: any = {};

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorConnectGet (connector: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/connect';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorConnectGet');
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorConnectInstructionsGet (connector: string, url: string, parameters: Array<string>, usePopup: boolean, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/connectInstructions';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorConnectInstructionsGet');
            }

            // verify required parameter 'url' is set
            if (!url) {
                throw new Error('Missing required parameter url when calling connectorsConnectorConnectInstructionsGet');
            }

            // verify required parameter 'parameters' is set
            if (!parameters) {
                throw new Error('Missing required parameter parameters when calling connectorsConnectorConnectInstructionsGet');
            }

            // verify required parameter 'usePopup' is set
            if (!usePopup) {
                throw new Error('Missing required parameter usePopup when calling connectorsConnectorConnectInstructionsGet');
            }

            if (url !== undefined) {
                queryParameters['url'] = url;
            }

            if (parameters !== undefined) {
                queryParameters['parameters'] = parameters;
            }

            if (usePopup !== undefined) {
                queryParameters['usePopup'] = usePopup;
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorConnectParameterGet (connector: string, displayName: string, key: string, usePopup: boolean, type: string, placeholder: string, defaultValue: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/connectParameter';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'displayName' is set
            if (!displayName) {
                throw new Error('Missing required parameter displayName when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'key' is set
            if (!key) {
                throw new Error('Missing required parameter key when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'usePopup' is set
            if (!usePopup) {
                throw new Error('Missing required parameter usePopup when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'type' is set
            if (!type) {
                throw new Error('Missing required parameter type when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'placeholder' is set
            if (!placeholder) {
                throw new Error('Missing required parameter placeholder when calling connectorsConnectorConnectParameterGet');
            }

            // verify required parameter 'defaultValue' is set
            if (!defaultValue) {
                throw new Error('Missing required parameter defaultValue when calling connectorsConnectorConnectParameterGet');
            }

            if (displayName !== undefined) {
                queryParameters['displayName'] = displayName;
            }

            if (key !== undefined) {
                queryParameters['key'] = key;
            }

            if (usePopup !== undefined) {
                queryParameters['usePopup'] = usePopup;
            }

            if (type !== undefined) {
                queryParameters['type'] = type;
            }

            if (placeholder !== undefined) {
                queryParameters['placeholder'] = placeholder;
            }

            if (defaultValue !== undefined) {
                queryParameters['defaultValue'] = defaultValue;
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorDisconnectGet (connector: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/disconnect';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorDisconnectGet');
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorInfoGet (connector: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/info';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorInfoGet');
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }

        public connectorsConnectorUpdateGet (connector: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/connectors/{connector}/update';

            path = path.replace('{' + 'connector' + '}', String(connector));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling connectorsConnectorUpdateGet');
            }

            var httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                for (var k in extraHttpRequestParams) {
                    if (extraHttpRequestParams.hasOwnProperty(k)) {
                        httpRequestParams[k] = extraHttpRequestParams[k];
                    }
                }
            }

            return this.$http(httpRequestParams);
        }
    }
}
