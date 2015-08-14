/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

module API.Client {
    'use strict';

    export class UnitsApi {
        private basePath = '/api';

        static $inject: string[] = ['$http'];

        constructor(private $http: ng.IHttpService, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        public unitCategoriesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<UnitCategory> {
            var path = this.basePath + '/unitCategories';

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

        public unitsGet (unitName?: string, abbreviatedUnitName?: string, categoryName?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Unit>> {
            var path = this.basePath + '/units';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (unitName !== undefined) {
                queryParameters['unitName'] = unitName;
            }

            if (abbreviatedUnitName !== undefined) {
                queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
            }

            if (categoryName !== undefined) {
                queryParameters['categoryName'] = categoryName;
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

        public unitsVariableGet (unitName?: string, abbreviatedUnitName?: string, categoryName?: string, variable?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Unit>> {
            var path = this.basePath + '/unitsVariable';

            var queryParameters: any = {};
            var headerParams: any = {};

            if (unitName !== undefined) {
                queryParameters['unitName'] = unitName;
            }

            if (abbreviatedUnitName !== undefined) {
                queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
            }

            if (categoryName !== undefined) {
                queryParameters['categoryName'] = categoryName;
            }

            if (variable !== undefined) {
                queryParameters['variable'] = variable;
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
