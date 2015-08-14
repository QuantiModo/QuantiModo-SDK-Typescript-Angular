/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class VariablesApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public correlationsPost (cause: string, effect: string, correlationcoefficient: string, vote: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/correlations';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'cause' is set
            if (!cause) {
                throw new Error('Missing required parameter cause when calling correlationsPost');
            }

            // verify required parameter 'effect' is set
            if (!effect) {
                throw new Error('Missing required parameter effect when calling correlationsPost');
            }

            // verify required parameter 'correlationcoefficient' is set
            if (!correlationcoefficient) {
                throw new Error('Missing required parameter correlationcoefficient when calling correlationsPost');
            }

            // verify required parameter 'vote' is set
            if (!vote) {
                throw new Error('Missing required parameter vote when calling correlationsPost');
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (correlationcoefficient !== undefined) {
                queryParameters['correlationcoefficient'] = correlationcoefficient;
            }

            if (vote !== undefined) {
                queryParameters['vote'] = vote;
            }

            var httpRequestParams: any = {
                method: 'POST',
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

        public publicVariablesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            var path = this.basePath + '/public/variables';

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

        public publicVariablesSearchSearchGet (search: string, effectOrCause?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            var path = this.basePath + '/public/variables/search/{search}';

            path = path.replace('{' + 'search' + '}', String(search));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling publicVariablesSearchSearchGet');
            }

            if (effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = effectOrCause;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (sort !== undefined) {
                queryParameters['sort'] = sort;
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

        public variableCategoriesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<VariableCategory>> {
            var path = this.basePath + '/variableCategories';

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

        public variableUserSettingsPost (sharingData: VariableUserSettings, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/variableUserSettings';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'sharingData' is set
            if (!sharingData) {
                throw new Error('Missing required parameter sharingData when calling variableUserSettingsPost');
            }

            var httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: sharingData,
                
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

        public variablesGet (userId?: number, category?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            var path = this.basePath + '/variables';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (userId !== undefined) {
                queryParameters['userId'] = userId;
            }

            if (category !== undefined) {
                queryParameters['category'] = category;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
            }

            if (sort !== undefined) {
                queryParameters['sort'] = sort;
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

        public variablesPost (variableName: VariablesNew, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            var path = this.basePath + '/variables';

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling variablesPost');
            }

            var httpRequestParams: any = {
                method: 'POST',
                url: path,
                json: true,
                data: variableName,
                
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

        public variablesSearchSearchGet (search: string, categoryName?: string, source?: string, limit?: number, offset?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Variable>> {
            var path = this.basePath + '/variables/search/{search}';

            path = path.replace('{' + 'search' + '}', String(search));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling variablesSearchSearchGet');
            }

            if (categoryName !== undefined) {
                queryParameters['categoryName'] = categoryName;
            }

            if (source !== undefined) {
                queryParameters['source'] = source;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
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

        public variablesVariableNameGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            var path = this.basePath + '/variables/{variableName}';

            path = path.replace('{' + 'variableName' + '}', String(variableName));

            var queryParameters: any = {};
            var headerParams: any = {};

            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling variablesVariableNameGet');
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
