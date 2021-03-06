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
        var ConnectorsApi = (function () {
            function ConnectorsApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'https://app.quantimo.do/api';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            ConnectorsApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             * Mobile connect page
             * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user&#39;s access_token as a URL parameter like https://app.quantimo.do/api/v1/connect/mobile?access_token&#x3D;123
             * @param accessToken User OAuth access token
             * @param userId User&#39;s id
             */
            ConnectorsApi.prototype.v1ConnectMobileGet = function (accessToken, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connect/mobile';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'accessToken' is not null or undefined
                if (accessToken === null || accessToken === undefined) {
                    throw new Error('Required parameter accessToken was null or undefined when calling v1ConnectMobileGet.');
                }
                if (accessToken !== undefined) {
                    queryParameters['access_token'] = accessToken;
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Obtain a token from 3rd party data source
             * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
             * @param connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v1/connectors/list endpoint.
             * @param userId User&#39;s id
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameConnectGet = function (connectorName, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/connect'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameConnectGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Connection Instructions
             * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
             * @param connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v1/connectors/list endpoint.
             * @param parameters JSON Array of Parameters for the request to enable connector.
             * @param url URL which should be used to enable the connector.
             * @param usePopup Should use popup when enabling connector
             * @param userId User&#39;s id
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameConnectInstructionsGet = function (connectorName, parameters, url, usePopup, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/connectInstructions'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameConnectInstructionsGet.');
                }
                // verify required parameter 'parameters' is not null or undefined
                if (parameters === null || parameters === undefined) {
                    throw new Error('Required parameter parameters was null or undefined when calling v1ConnectorsConnectorNameConnectInstructionsGet.');
                }
                // verify required parameter 'url' is not null or undefined
                if (url === null || url === undefined) {
                    throw new Error('Required parameter url was null or undefined when calling v1ConnectorsConnectorNameConnectInstructionsGet.');
                }
                // verify required parameter 'usePopup' is not null or undefined
                if (usePopup === null || usePopup === undefined) {
                    throw new Error('Required parameter usePopup was null or undefined when calling v1ConnectorsConnectorNameConnectInstructionsGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (parameters !== undefined) {
                    queryParameters['parameters'] = parameters;
                }
                if (url !== undefined) {
                    queryParameters['url'] = url;
                }
                if (usePopup !== undefined) {
                    queryParameters['usePopup'] = usePopup;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Connect Parameter
             * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
             * @param connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v1/connectors/list endpoint.
             * @param displayName Name of the parameter that is user visible in the form
             * @param key Name of the property that the user has to enter such as username or password Connector (used in HTTP request)
             * @param placeholder Placeholder hint value for the parameter input tag.
             * @param type Type of input field such as those found here http://www.w3schools.com/tags/tag_input.asp
             * @param usePopup Should use popup when enabling connector
             * @param userId User&#39;s id
             * @param defaultValue Default parameter value
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameConnectParameterGet = function (connectorName, displayName, key, placeholder, type, usePopup, userId, defaultValue, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/connectParameter'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                // verify required parameter 'displayName' is not null or undefined
                if (displayName === null || displayName === undefined) {
                    throw new Error('Required parameter displayName was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new Error('Required parameter key was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                // verify required parameter 'placeholder' is not null or undefined
                if (placeholder === null || placeholder === undefined) {
                    throw new Error('Required parameter placeholder was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                // verify required parameter 'type' is not null or undefined
                if (type === null || type === undefined) {
                    throw new Error('Required parameter type was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                // verify required parameter 'usePopup' is not null or undefined
                if (usePopup === null || usePopup === undefined) {
                    throw new Error('Required parameter usePopup was null or undefined when calling v1ConnectorsConnectorNameConnectParameterGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (defaultValue !== undefined) {
                    queryParameters['defaultValue'] = defaultValue;
                }
                if (displayName !== undefined) {
                    queryParameters['displayName'] = displayName;
                }
                if (key !== undefined) {
                    queryParameters['key'] = key;
                }
                if (placeholder !== undefined) {
                    queryParameters['placeholder'] = placeholder;
                }
                if (type !== undefined) {
                    queryParameters['type'] = type;
                }
                if (usePopup !== undefined) {
                    queryParameters['usePopup'] = usePopup;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Delete stored connection info
             * The disconnect method deletes any stored tokens or connection information from the connectors database.
             * @param connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v1/connectors/list endpoint.
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameDisconnectGet = function (connectorName, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/disconnect'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameDisconnectGet.');
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Get connector info for user
             * Returns information about the connector such as the connector id, whether or not is connected for this user (i.e. we have a token or credentials), and its update history for the user.
             * @param connectorName Lowercase system name of the source application or device. Get a list of available connectors from the /v1/connectors/list endpoint.
             * @param userId User&#39;s id
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameInfoGet = function (connectorName, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/info'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameInfoGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Sync with data source
             * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
             * @param connectorName Lowercase system name of the source application or device
             * @param userId User&#39;s id
             */
            ConnectorsApi.prototype.v1ConnectorsConnectorNameUpdateGet = function (connectorName, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/{connectorName}/update'
                    .replace('{' + 'connectorName' + '}', String(connectorName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'connectorName' is not null or undefined
                if (connectorName === null || connectorName === undefined) {
                    throw new Error('Required parameter connectorName was null or undefined when calling v1ConnectorsConnectorNameUpdateGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * List of Connectors
             * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
             */
            ConnectorsApi.prototype.v1ConnectorsListGet = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/connectors/list';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Get embeddable connect javascript
             * Get embeddable connect javascript. Usage:   - Embedding in applications with popups for 3rd-party authentication windows.     Use &#x60;qmSetupInPopup&#x60; function after connecting &#x60;connect.js&#x60;.   - Embedding in applications with popups for 3rd-party authentication windows.     Requires a selector to block. It will be embedded in this block.     Use &#x60;qmSetupOnPage&#x60; function after connecting &#x60;connect.js&#x60;.   - Embedding in mobile applications without popups for 3rd-party authentication.     Use &#x60;qmSetupOnMobile&#x60; function after connecting &#x60;connect.js&#x60;.     If using in a Cordova application call  &#x60;qmSetupOnIonic&#x60; function after connecting &#x60;connect.js&#x60;.
             * @param clientId Your app&#39;s client id
             */
            ConnectorsApi.prototype.v1IntegrationJsGet = function (clientId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/integration.js';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (clientId !== undefined) {
                    queryParameters['clientId'] = clientId;
                }
                var httpRequestParams = {
                    method: 'GET',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            return ConnectorsApi;
        }());
        ConnectorsApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
        Client.ConnectorsApi = ConnectorsApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
