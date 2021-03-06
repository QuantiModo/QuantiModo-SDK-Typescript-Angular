/**
 * QuantiModo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do).
 *
 * OpenAPI spec version: 5.8.5
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference path="api.d.ts" />
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var VotesApi = (function () {
            function VotesApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'https://app.quantimo.do/api';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            VotesApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             * Delete vote
             * Delete previously posted vote
             * @param body The cause and effect variable names for the predictor vote to be deleted.
             * @param userId User&#39;s id
             */
            VotesApi.prototype.v1VotesDeletePost = function (body, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/votes/delete';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new Error('Required parameter body was null or undefined when calling v1VotesDeletePost.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: body,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Post or update vote
             * This is to enable users to indicate their opinion on the plausibility of a causal relationship between a treatment and outcome. QuantiModo incorporates crowd-sourced plausibility estimations into their algorithm. This is done allowing user to indicate their view of the plausibility of each relationship with thumbs up/down buttons placed next to each prediction.
             * @param body Contains the cause variable, effect variable, and vote value.
             * @param userId User&#39;s id
             */
            VotesApi.prototype.v1VotesPost = function (body, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/votes';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new Error('Required parameter body was null or undefined when calling v1VotesPost.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: body,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            return VotesApi;
        }());
        VotesApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
        Client.VotesApi = VotesApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
