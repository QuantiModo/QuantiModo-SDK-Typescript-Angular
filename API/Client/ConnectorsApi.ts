/**
 * QuantiModo
 * Welcome to QuantiModo API! QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do) or contact us at <api@quantimo.do>.         Before you get started, you will need to: * Sign in/Sign up, and add some data at [https://app.quantimo.do/api/v2/account/connectors](https://app.quantimo.do/api/v2/account/connectors) to try out the API for yourself * Create an app to get your client id and secret at [https://app.quantimo.do/api/v2/apps](https://app.quantimo.do/api/v2/apps) * As long as you're signed in, it will use your browser's cookie for authentication.  However, client applications must use OAuth2 tokens to access the API.     ## Application Endpoints These endpoints give you access to all authorized users' data for that application. ### Getting Application Token Make a `POST` request to `/api/v2/oauth/access_token`         * `grant_type` Must be `client_credentials`.         * `clientId` Your application's clientId.         * `client_secret` Your application's client_secret.         * `redirect_uri` Your application's redirect url.                ## Example Queries ### Query Options The standard query options for QuantiModo API are as described in the table below. These are the available query options in QuantiModo API: <table>            <thead>                <tr>                    <th>Parameter</th>                    <th>Description</th>                </tr>            </thead>            <tbody>                <tr>                    <td>limit</td>                    <td>The LIMIT is used to limit the number of results returned.  So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.</td>                </tr>                <tr>                    <td>offset</td>                    <td>Suppose you wanted to show results 11-20. You'd set the    offset to 10 and the limit to 10.</td>                </tr>                <tr>                    <td>sort</td>                    <td>Sort by given field. If the field is prefixed with '-', it    will sort in descending order.</td>                </tr>            </tbody>        </table>         ### Pagination Conventions Since the maximum limit is 200 records, to get more than that you'll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the `limit` and `offset` query parameters.For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters,         `/v2/variables?limit=20&offset=60`         Generally, you'll be retrieving new or updated user data. To avoid unnecessary API calls, you'll want to store your last refresh time locally.  Initially, it should be set to 0. Then whenever you make a request to get new data, you should limit the returned results to those updated since your last refresh by appending append         `?lastUpdated=(ge)&quot2013-01-D01T01:01:01&quot`         to your request.         Also for better pagination, you can get link to the records of first, last, next and previous page from response headers: * `Total-Count` - Total number of results for given query * `Link-First` - Link to get first page records * `Link-Last` - Link to get last page records * `Link-Prev` - Link to get previous records set * `Link-Next` - Link to get next records set         Remember, response header will be only sent when the record set is available. e.g. You will not get a ```Link-Last``` & ```Link-Next``` when you query for the last page.         ### Filter operators support API supports the following operators with filter parameters: <br> **Comparison operators**         Comparison operators allow you to limit results to those greater than, less than, or equal to a specified value for a specified attribute. These operators can be used with strings, numbers, and dates. The following comparison operators are available: * `gt` for `greater than` comparison * `ge` for `greater than or equal` comparison * `lt` for `less than` comparison * `le` for `less than or equal` comparison         They are included in queries using the following format:         `(<operator>)<value>`         For example, in order to filter value which is greater than 21, the following query parameter should be used:         `?value=(gt)21` <br><br> **Equals/In Operators**         It also allows filtering by the exact value of an attribute or by a set of values, depending on the type of value passed as a query parameter. If the value contains commas, the parameter is split on commas and used as array input for `IN` filtering, otherwise the exact match is applied. In order to only show records which have the value 42, the following query should be used:         `?value=42`         In order to filter records which have value 42 or 43, the following query should be used:         `?value=42,43` <br><br> **Like operators**         Like operators allow filtering using `LIKE` query. This operator is triggered if exact match operator is used, but value contains `%` sign as the first or last character. In order to filter records which category that start with `Food`, the following query should be used:         `?category=Food%` <br><br> **Negation operator**         It is possible to get negated results of a query by prefixed the operator with `!`. Some examples:         `//filter records except those with value are not 42 or 43`<br> `?value=!42,43`         `//filter records with value not greater than 21`<br> `?value=!(ge)21` <br><br> **Multiple constraints for single attribute**         It is possible to apply multiple constraints by providing an array of query filters:         Filter all records which value is greater than 20.2 and less than 20.3<br> `?value[]=(gt)20.2&value[]=(lt)20.3`         Filter all records which value is greater than 20.2 and less than 20.3 but not 20.2778<br> `?value[]=(gt)20.2&value[]=(lt)20.3&value[]=!20.2778`<br><br> 
 *
 * OpenAPI spec version: 2.0.6
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

namespace API.Client {
    'use strict';

    export class ConnectorsApi {
        protected basePath = 'https://app.quantimo.do/api';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath !== undefined) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * Get embeddable connect javascript
         * Get embeddable connect javascript. Usage:    - Embedding in applications with popups for 3rd-party authentication windows.      Use &#x60;qmSetupInPopup&#x60; function after connecting &#x60;connect.js&#x60;.    - Embedding in applications with popups for 3rd-party authentication windows.      Requires a selector to block. It will be embedded in this block.      Use &#x60;qmSetupOnPage&#x60; function after connecting &#x60;connect.js&#x60;.    - Embedding in mobile applications without popups for 3rd-party authentication.      Use &#x60;qmSetupOnMobile&#x60; function after connecting &#x60;connect.js&#x60;.      if using the MoodiModo Clones, Use &#x60;qmSetupOnIonic&#x60; function after connecting &#x60;connect.js&#x60;. 
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1ConnectJsGet (accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connect.js';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * Mobile connect page
         * This page is designed to be opened in a webview.  Instead of using popup authentication boxes, it uses redirection. You can include the user&#39;s access_token as a URL parameter like https://app.quantimo.do/api/v1/connect/mobile?access_token&#x3D;123
         * @param accessToken User OAuth access token
         */
        public v1ConnectMobileGet (accessToken: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connect/mobile';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'accessToken' is set
            if (!accessToken) {
                throw new Error('Missing required parameter accessToken when calling v1ConnectMobileGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * Obtain a token from 3rd party data source
         * Attempt to obtain a token from the data provider, store it in the database. With this, the connector to continue to obtain new user data until the token is revoked.
         * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1ConnectorsConnectorConnectGet (connector: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/connect'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorConnectGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * Connection Instructions
         * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
         * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
         * @param parameters JSON Array of Parameters for the request to enable connector.
         * @param url URL which should be used to enable the connector.
         * @param usePopup Should use popup when enabling connector
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1ConnectorsConnectorConnectInstructionsGet (connector: string, parameters: string, url: string, usePopup: boolean, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/connectInstructions'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorConnectInstructionsGet');
            }
            // verify required parameter 'parameters' is set
            if (!parameters) {
                throw new Error('Missing required parameter parameters when calling v1ConnectorsConnectorConnectInstructionsGet');
            }
            // verify required parameter 'url' is set
            if (!url) {
                throw new Error('Missing required parameter url when calling v1ConnectorsConnectorConnectInstructionsGet');
            }
            // verify required parameter 'usePopup' is set
            if (!usePopup) {
                throw new Error('Missing required parameter usePopup when calling v1ConnectorsConnectorConnectInstructionsGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
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

            let httpRequestParams: any = {
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
        }
        /**
         * Connect Parameter
         * Returns instructions that describe what parameters and endpoint to use to connect to the given data provider.
         * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
         * @param displayName Name of the parameter that is user visible in the form
         * @param key Name of the property that the user has to enter such as username or password Connector (used in HTTP request)
         * @param placeholder Placeholder hint value for the parameter input tag.
         * @param type Type of input field such as those found here http://www.w3schools.com/tags/tag_input.asp
         * @param usePopup Should use popup when enabling connector
         * @param accessToken User&#39;s OAuth2 access token
         * @param defaultValue Default parameter value
         */
        public v1ConnectorsConnectorConnectParameterGet (connector: string, displayName: string, key: string, placeholder: string, type: string, usePopup: boolean, accessToken?: string, defaultValue?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ConnectorInstruction> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/connectParameter'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorConnectParameterGet');
            }
            // verify required parameter 'displayName' is set
            if (!displayName) {
                throw new Error('Missing required parameter displayName when calling v1ConnectorsConnectorConnectParameterGet');
            }
            // verify required parameter 'key' is set
            if (!key) {
                throw new Error('Missing required parameter key when calling v1ConnectorsConnectorConnectParameterGet');
            }
            // verify required parameter 'placeholder' is set
            if (!placeholder) {
                throw new Error('Missing required parameter placeholder when calling v1ConnectorsConnectorConnectParameterGet');
            }
            // verify required parameter 'type' is set
            if (!type) {
                throw new Error('Missing required parameter type when calling v1ConnectorsConnectorConnectParameterGet');
            }
            // verify required parameter 'usePopup' is set
            if (!usePopup) {
                throw new Error('Missing required parameter usePopup when calling v1ConnectorsConnectorConnectParameterGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
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

            let httpRequestParams: any = {
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
        }
        /**
         * Delete stored connection info
         * The disconnect method deletes any stored tokens or connection information from the connectors database.
         * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
         */
        public v1ConnectorsConnectorDisconnectGet (connector: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/disconnect'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorDisconnectGet');
            }
            let httpRequestParams: any = {
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
        }
        /**
         * Get connector info for user
         * Returns information about the connector such as the connector id, whether or not is connected for this user (i.e. we have a token or credentials), and its update history for the user.
         * @param connector Lowercase system name of the source application or device. Get a list of available connectors from the /connectors/list endpoint.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1ConnectorsConnectorInfoGet (connector: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<ConnectorInfo> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/info'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorInfoGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * Sync with data source
         * The update method tells the QM Connector Framework to check with the data provider (such as Fitbit or MyFitnessPal) and retrieve any new measurements available.
         * @param connector Lowercase system name of the source application or device
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1ConnectorsConnectorUpdateGet (connector: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/connectors/{connector}/update'
                .replace('{' + 'connector' + '}', String(connector));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'connector' is set
            if (!connector) {
                throw new Error('Missing required parameter connector when calling v1ConnectorsConnectorUpdateGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * List of Connectors
         * A connector pulls data from other data providers using their API or a screenscraper. Returns a list of all available connectors and information about them such as their id, name, whether the user has provided access, logo url, connection instructions, and the update history.
         */
        public v1ConnectorsListGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Connector>> {
            const localVarPath = this.basePath + '/v1/connectors/list';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
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
        }
    }
}
