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

    export class CorrelationsApi {
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
         * Get aggregated correlations
         * Get correlations based on the anonymized aggregate data from all QuantiModo users.
         * @param accessToken User&#39;s OAuth2 access token
         * @param effect ORIGINAL variable name of the effect variable for which the user desires correlations
         * @param cause ORIGINAL variable name of the cause variable for which the user desires correlations
         * @param correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
         * @param onsetDelay The number of seconds which pass following a cause measurement before an effect would likely be observed.
         * @param durationOfAction The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.
         * @param lastUpdated The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1AggregatedCorrelationsGet (accessToken?: string, effect?: string, cause?: string, correlationCoefficient?: string, onsetDelay?: string, durationOfAction?: string, lastUpdated?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/aggregatedCorrelations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (correlationCoefficient !== undefined) {
                queryParameters['correlationCoefficient'] = correlationCoefficient;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onsetDelay'] = onsetDelay;
            }

            if (durationOfAction !== undefined) {
                queryParameters['durationOfAction'] = durationOfAction;
            }

            if (lastUpdated !== undefined) {
                queryParameters['lastUpdated'] = lastUpdated;
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
         * Store or Update a Correlation
         * Add correlation
         * @param body Provides correlation data
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1AggregatedCorrelationsPost (body: PostCorrelation, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/aggregatedCorrelations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1AggregatedCorrelationsPost');
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
         * Get correlations
         * Get correlations.&lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;correlationCoefficient&lt;/b&gt; - Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action&lt;/li&gt;&lt;li&gt;&lt;b&gt;onsetDelay&lt;/b&gt; - The number of seconds which pass following a cause measurement before an effect would likely be observed.&lt;/li&gt;&lt;li&gt;&lt;b&gt;durationOfAction&lt;/b&gt; - The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
         * @param accessToken User&#39;s OAuth2 access token
         * @param effect ORIGINAL variable name of the effect variable for which the user desires correlations
         * @param cause ORIGINAL variable name of the cause variable for which the user desires correlations
         * @param correlationCoefficient Pearson correlation coefficient between cause and effect after lagging by onset delay and grouping by duration of action
         * @param onsetDelay The number of seconds which pass following a cause measurement before an effect would likely be observed.
         * @param durationOfAction The time in seconds over which the cause would be expected to exert a measurable effect. We have selected a default value for each variable. This default value may be replaced by a user specified by adjusting their variable user settings.
         * @param lastUpdated The time that this measurement was last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1CorrelationsGet (accessToken?: string, effect?: string, cause?: string, correlationCoefficient?: string, onsetDelay?: string, durationOfAction?: string, lastUpdated?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/correlations';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (effect !== undefined) {
                queryParameters['effect'] = effect;
            }

            if (cause !== undefined) {
                queryParameters['cause'] = cause;
            }

            if (correlationCoefficient !== undefined) {
                queryParameters['correlationCoefficient'] = correlationCoefficient;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onsetDelay'] = onsetDelay;
            }

            if (durationOfAction !== undefined) {
                queryParameters['durationOfAction'] = durationOfAction;
            }

            if (lastUpdated !== undefined) {
                queryParameters['lastUpdated'] = lastUpdated;
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
         * Search user correlations for a given cause
         * Returns average of all correlations and votes for all user cause variables for a given cause. If parameter \&quot;include_public\&quot; is used, it also returns public correlations. User correlation overwrites or supersedes public correlation.
         * @param organizationId Organization ID
         * @param userId User id
         * @param variableName Effect variable name
         * @param organizationToken Organization access token
         * @param accessToken User&#39;s OAuth2 access token
         * @param includePublic Include public correlations, Can be \&quot;1\&quot; or empty.
         */
        public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet (organizationId: number, userId: number, variableName: string, organizationToken: string, accessToken?: string, includePublic?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/causes'
                .replace('{' + 'organizationId' + '}', String(organizationId))
                .replace('{' + 'userId' + '}', String(userId))
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'organizationId' is set
            if (!organizationId) {
                throw new Error('Missing required parameter organizationId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }
            // verify required parameter 'userId' is set
            if (!userId) {
                throw new Error('Missing required parameter userId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }
            // verify required parameter 'organizationToken' is set
            if (!organizationToken) {
                throw new Error('Missing required parameter organizationToken when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameCausesGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (organizationToken !== undefined) {
                queryParameters['organization_token'] = organizationToken;
            }

            if (includePublic !== undefined) {
                queryParameters['includePublic'] = includePublic;
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
         * Search user correlations for a given cause
         * Returns average of all correlations and votes for all user cause variables for a given effect. If parameter \&quot;include_public\&quot; is used, it also returns public correlations. User correlation overwrites or supersedes public correlation.
         * @param organizationId Organization ID
         * @param userId User id
         * @param variableName Cause variable name
         * @param organizationToken Organization access token
         * @param accessToken User&#39;s OAuth2 access token
         * @param includePublic Include public correlations, Can be \&quot;1\&quot; or empty.
         */
        public v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet (organizationId: number, userId: number, variableName: string, organizationToken: string, accessToken?: string, includePublic?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<CommonResponse>> {
            const localVarPath = this.basePath + '/v1/organizations/{organizationId}/users/{userId}/variables/{variableName}/effects'
                .replace('{' + 'organizationId' + '}', String(organizationId))
                .replace('{' + 'userId' + '}', String(userId))
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'organizationId' is set
            if (!organizationId) {
                throw new Error('Missing required parameter organizationId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }
            // verify required parameter 'userId' is set
            if (!userId) {
                throw new Error('Missing required parameter userId when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }
            // verify required parameter 'organizationToken' is set
            if (!organizationToken) {
                throw new Error('Missing required parameter organizationToken when calling v1OrganizationsOrganizationIdUsersUserIdVariablesVariableNameEffectsGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (organizationToken !== undefined) {
                queryParameters['organization_token'] = organizationToken;
            }

            if (includePublic !== undefined) {
                queryParameters['include_public'] = includePublic;
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
         * Get average correlations for variables containing search term
         * Returns the average correlations from all users for all public variables that contain the characters in the search query. Returns average of all users public variable correlations with a specified cause or effect.
         * @param search Name of the variable that you want to know the causes or effects of.
         * @param effectOrCause Setting this to effect indicates that the searched variable is the effect and that the causes of this variable should be returned.  cause indicates that the searched variable is the cause and the effects should be returned.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1PublicCorrelationsSearchSearchGet (search: string, effectOrCause: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/public/correlations/search/{search}'
                .replace('{' + 'search' + '}', String(search));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'search' is set
            if (!search) {
                throw new Error('Missing required parameter search when calling v1PublicCorrelationsSearchSearchGet');
            }
            // verify required parameter 'effectOrCause' is set
            if (!effectOrCause) {
                throw new Error('Missing required parameter effectOrCause when calling v1PublicCorrelationsSearchSearchGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (effectOrCause !== undefined) {
                queryParameters['effectOrCause'] = effectOrCause;
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
         * Search user correlations for a given effect
         * Returns average of all correlations and votes for all user cause variables for a given effect
         * @param variableName Effect variable name
         */
        public v1VariablesVariableNameCausesGet (variableName: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/variables/{variableName}/causes'
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNameCausesGet');
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
         * Search user correlations for a given cause
         * Returns average of all correlations and votes for all user effect variables for a given cause
         * @param variableName Cause variable name
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VariablesVariableNameEffectsGet (variableName: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/variables/{variableName}/effects'
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNameEffectsGet');
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
         * Search public correlations for a given effect
         * Returns average of all correlations and votes for all public cause variables for a given effect
         * @param variableName Effect variable name
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VariablesVariableNamePublicCausesGet (variableName: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/variables/{variableName}/public/causes'
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNamePublicCausesGet');
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
         * Search public correlations for a given cause
         * Returns average of all correlations and votes for all public cause variables for a given cause
         * @param variableName Cause variable name
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VariablesVariableNamePublicEffectsGet (variableName: string, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<Correlation>> {
            const localVarPath = this.basePath + '/v1/variables/{variableName}/public/effects'
                .replace('{' + 'variableName' + '}', String(variableName));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1VariablesVariableNamePublicEffectsGet');
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
         * Delete vote
         * Delete previously posted vote
         * @param body The cause and effect variable names for the predictor vote to be deleted.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VotesDeletePost (body: VoteDelete, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/votes/delete';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1VotesDeletePost');
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
         * Post or update vote
         * This is to enable users to indicate their opinion on the plausibility of a causal relationship between a treatment and outcome. QuantiModo incorporates crowd-sourced plausibility estimations into their algorithm. This is done allowing user to indicate their view of the plausibility of each relationship with thumbs up/down buttons placed next to each prediction.
         * @param body Contains the cause variable, effect variable, and vote value.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1VotesPost (body: PostVote, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/votes';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1VotesPost');
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
    }
}
