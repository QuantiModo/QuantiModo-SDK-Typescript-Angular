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

    export class VariablesApi {
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
         * Get public variables
         * This endpoint retrieves an array of all public variables. Public variables are things like foods, medications, symptoms, conditions, and anything not unique to a particular user. For instance, a telephone number or name would not be a public variable.
         */
        public v1PublicVariablesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            const localVarPath = this.basePath + '/v1/public/variables';

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
        /**
         * Get top 5 PUBLIC variables with the most correlations
         * Get top 5 PUBLIC variables with the most correlations containing the entered search characters. For example, search for &#39;mood&#39; as an effect. Since &#39;Overall Mood&#39; has a lot of correlations with other variables, it should be in the autocomplete list.&lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;category&lt;/b&gt; - Category of Variable&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
         * @param search Search query can be some fraction of a variable name.
         * @param accessToken User&#39;s OAuth2 access token
         * @param categoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
         * @param source Specify a data source name to only return variables from a specific data source.
         * @param effectOrCause Indicate if you only want variables that have user correlations.  Possible values are effect and cause.
         * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1PublicVariablesSearchSearchGet (search: string, accessToken?: string, categoryName?: string, source?: string, effectOrCause?: string, publicEffectOrCause?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            const localVarPath = this.basePath + '/v1/public/variables/search/{search}'
                .replace('{' + 'search' + '}', String(search));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling v1PublicVariablesSearchSearchGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (categoryName !== undefined) {
                queryParameters['categoryName'] = categoryName;
            }

            if (source !== undefined) {
                queryParameters['source'] = source;
            }

            if (effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = effectOrCause;
            }

            if (publicEffectOrCause !== undefined) {
                queryParameters['publicEffectOrCause'] = publicEffectOrCause;
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
         * Update User Settings for a Variable
         * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
         * @param userVariables Variable user settings data
         */
        public v1UserVariablesPost (userVariables: UserVariables, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/userVariables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'userVariables' is set
            if (!userVariables) {
                throw new Error('Missing required parameter userVariables when calling v1UserVariablesPost');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: userVariables,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Variable categories
         * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
         */
        public v1VariableCategoriesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<VariableCategory>> {
            const localVarPath = this.basePath + '/v1/variableCategories';

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
        /**
         * Get variables by the category name
         * Get variables by the category name. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;name&lt;/b&gt; - Original name of the variable (supports exact name match only)&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;li&gt;&lt;b&gt;source&lt;/b&gt; - The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here&lt;/li&gt;&lt;li&gt;&lt;b&gt;latestMeasurementTime&lt;/b&gt; - Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;li&gt;&lt;b&gt;numberOfMeasurements&lt;/b&gt; - Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastSource&lt;/b&gt; - Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
         * @param accessToken User&#39;s OAuth2 access token
         * @param id Common variable id
         * @param userId User id
         * @param category Filter data by category
         * @param name Original name of the variable (supports exact name match only)
         * @param lastUpdated Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
         * @param source The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here
         * @param latestMeasurementTime Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
         * @param numberOfMeasurements Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.
         * @param lastSource Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1VariablesGet (accessToken?: string, id?: number, userId?: number, category?: string, name?: string, lastUpdated?: string, source?: string, latestMeasurementTime?: string, numberOfMeasurements?: string, lastSource?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            const localVarPath = this.basePath + '/v1/variables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (id !== undefined) {
                queryParameters['id'] = id;
            }

            if (userId !== undefined) {
                queryParameters['userId'] = userId;
            }

            if (category !== undefined) {
                queryParameters['category'] = category;
            }

            if (name !== undefined) {
                queryParameters['name'] = name;
            }

            if (lastUpdated !== undefined) {
                queryParameters['lastUpdated'] = lastUpdated;
            }

            if (source !== undefined) {
                queryParameters['source'] = source;
            }

            if (latestMeasurementTime !== undefined) {
                queryParameters['latestMeasurementTime'] = latestMeasurementTime;
            }

            if (numberOfMeasurements !== undefined) {
                queryParameters['numberOfMeasurements'] = numberOfMeasurements;
            }

            if (lastSource !== undefined) {
                queryParameters['lastSource'] = lastSource;
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
         * Create Variables
         * Allows the client to create a new variable in the &#x60;variables&#x60; table.
         * @param body Original name for the variable.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VariablesPost (body: VariablesNew, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/variables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1VariablesPost');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
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
        }
        /**
         * Get variables by search query
         * Get variables containing the search characters for which the currently logged in user has measurements. Used to provide auto-complete function in variable search boxes.
         * @param search Search query which may be an entire variable name or a fragment of one.
         * @param accessToken User&#39;s OAuth2 access token
         * @param categoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
         * @param includePublic Set to true if you would like to include public variables when no user variables are found.
         * @param manualTracking Set to true if you would like to exlude variables like apps and website names.
         * @param source Specify a data source name to only return variables from a specific data source.
         * @param effectOrCause Indicate if you only want variables that have user correlations.  Possible values are effect and cause.
         * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         */
        public v1VariablesSearchSearchGet (search: string, accessToken?: string, categoryName?: string, includePublic?: boolean, manualTracking?: boolean, source?: string, effectOrCause?: string, publicEffectOrCause?: string, limit?: number, offset?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Variable>> {
            const localVarPath = this.basePath + '/v1/variables/search/{search}'
                .replace('{' + 'search' + '}', String(search));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling v1VariablesSearchSearchGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (categoryName !== undefined) {
                queryParameters['categoryName'] = categoryName;
            }

            if (includePublic !== undefined) {
                queryParameters['includePublic'] = includePublic;
            }

            if (manualTracking !== undefined) {
                queryParameters['manualTracking'] = manualTracking;
            }

            if (source !== undefined) {
                queryParameters['source'] = source;
            }

            if (effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = effectOrCause;
            }

            if (publicEffectOrCause !== undefined) {
                queryParameters['publicEffectOrCause'] = publicEffectOrCause;
            }

            if (limit !== undefined) {
                queryParameters['limit'] = limit;
            }

            if (offset !== undefined) {
                queryParameters['offset'] = offset;
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
         * Get info about a variable
         * Get all of the settings and information about a variable by its name. If the logged in user has modified the settings for the variable, these will be provided instead of the default settings for that variable.
         * @param variableName Variable name
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VariablesVariableNameGet (variableName: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Variable> {
            const localVarPath = this.basePath + '/v1/variables/{variableName}'
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNameGet');
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
    }
}
