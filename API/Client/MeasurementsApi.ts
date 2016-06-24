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

    export class MeasurementsApi {
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
         * Get measurement sources
         * Returns a list of all the apps from which measurement data is obtained.
         */
        public v1MeasurementSourcesGet (extraHttpRequestParams?: any ) : ng.IHttpPromise<MeasurementSource> {
            const localVarPath = this.basePath + '/v1/measurementSources';

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
         * Add a data source
         * Add a life-tracking app or device to the QuantiModo list of data sources.
         * @param body An array of names of data sources you want to add.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1MeasurementSourcesPost (body: MeasurementSource, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/measurementSources';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1MeasurementSourcesPost');
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
         * Get daily measurements for this user
         * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;value&lt;/b&gt; - Value of measurement&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was created or last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
         * @param variableName Name of the variable you want measurements for
         * @param accessToken User&#39;s OAuth2 access token
         * @param abbreviatedUnitName The unit your want the measurements in
         * @param startTime The lower limit of measurements returned (Iso8601)
         * @param endTime The upper limit of measurements returned (Iso8601)
         * @param groupingWidth The time (in seconds) over which measurements are grouped together
         * @param groupingTimezone The time (in seconds) over which measurements are grouped together
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1MeasurementsDailyGet (variableName: string, accessToken?: string, abbreviatedUnitName?: string, startTime?: string, endTime?: string, groupingWidth?: number, groupingTimezone?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Measurement> {
            const localVarPath = this.basePath + '/v1/measurements/daily';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'variableName' is set
            if (!variableName) {
                throw new Error('Missing required parameter variableName when calling v1MeasurementsDailyGet');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (variableName !== undefined) {
                queryParameters['variableName'] = variableName;
            }

            if (abbreviatedUnitName !== undefined) {
                queryParameters['abbreviatedUnitName'] = abbreviatedUnitName;
            }

            if (startTime !== undefined) {
                queryParameters['startTime'] = startTime;
            }

            if (endTime !== undefined) {
                queryParameters['endTime'] = endTime;
            }

            if (groupingWidth !== undefined) {
                queryParameters['groupingWidth'] = groupingWidth;
            }

            if (groupingTimezone !== undefined) {
                queryParameters['groupingTimezone'] = groupingTimezone;
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
         * Delete a measurement
         * Delete a previously submitted measurement
         * @param body The startTime and variableId of the measurement to be deleted.
         */
        public v1MeasurementsDeletePost (body: MeasurementDelete, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/measurements/delete';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1MeasurementsDeletePost');
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
         * Get measurements for this user
         * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten. &lt;br&gt;Supported filter parameters:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;value&lt;/b&gt; - Value of measurement&lt;/li&gt;&lt;li&gt;&lt;b&gt;lastUpdated&lt;/b&gt; - The time that this measurement was created or last updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;
         * @param accessToken User&#39;s OAuth2 access token
         * @param variableName Name of the variable you want measurements for
         * @param variableCategoryName Name of the variable category you want measurements for
         * @param source Name of the source you want measurements for (supports exact name match only)
         * @param value Value of measurement
         * @param lastUpdated The time that this measurement was created or last updated in the format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
         * @param unit The unit you want the measurements returned in
         * @param startTime The lower limit of measurements returned (Epoch)
         * @param createdAt The time the measurement record was first created in the format YYYY-MM-DDThh:mm:ss. Time zone should be UTC and not local.
         * @param updatedAt The time the measurement record was last changed in the format YYYY-MM-DDThh:mm:ss. Time zone should be UTC and not local.
         * @param endTime The upper limit of measurements returned (Epoch)
         * @param groupingWidth The time (in seconds) over which measurements are grouped together
         * @param groupingTimezone The time (in seconds) over which measurements are grouped together
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
         * @param offset Now suppose you wanted to show results 11-20. You&#39;d set the offset to 10 and the limit to 10.
         * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
         */
        public v1MeasurementsGet (accessToken?: string, variableName?: string, variableCategoryName?: string, source?: string, value?: string, lastUpdated?: string, unit?: string, startTime?: string, createdAt?: string, updatedAt?: string, endTime?: string, groupingWidth?: number, groupingTimezone?: string, limit?: number, offset?: number, sort?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Measurement> {
            const localVarPath = this.basePath + '/v1/measurements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (variableName !== undefined) {
                queryParameters['variableName'] = variableName;
            }

            if (variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = variableCategoryName;
            }

            if (source !== undefined) {
                queryParameters['source'] = source;
            }

            if (value !== undefined) {
                queryParameters['value'] = value;
            }

            if (lastUpdated !== undefined) {
                queryParameters['lastUpdated'] = lastUpdated;
            }

            if (unit !== undefined) {
                queryParameters['unit'] = unit;
            }

            if (startTime !== undefined) {
                queryParameters['startTime'] = startTime;
            }

            if (createdAt !== undefined) {
                queryParameters['createdAt'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updatedAt'] = updatedAt;
            }

            if (endTime !== undefined) {
                queryParameters['endTime'] = endTime;
            }

            if (groupingWidth !== undefined) {
                queryParameters['groupingWidth'] = groupingWidth;
            }

            if (groupingTimezone !== undefined) {
                queryParameters['groupingTimezone'] = groupingTimezone;
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
         * Post a new set or update existing measurements to the database
         * You can submit or update multiple measurements in a \&quot;measurements\&quot; sub-array.  If the variable these measurements correspond to does not already exist in the database, it will be automatically added.  The request body should look something like [{\&quot;measurements\&quot;:[{\&quot;startTime\&quot;:1439389320,\&quot;value\&quot;:\&quot;3\&quot;}, {\&quot;startTime\&quot;:1439389319,\&quot;value\&quot;:\&quot;2\&quot;}],\&quot;name\&quot;:\&quot;Acne (out of 5)\&quot;,\&quot;source\&quot;:\&quot;QuantiModo\&quot;,\&quot;category\&quot;:\&quot;Symptoms\&quot;,\&quot;combinationOperation\&quot;:\&quot;MEAN\&quot;,\&quot;unit\&quot;:\&quot;/5\&quot;}]
         * @param body An array of measurements you want to insert.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1MeasurementsPost (body: MeasurementSet, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
            const localVarPath = this.basePath + '/v1/measurements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1MeasurementsPost');
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
         * Get measurements range for this user
         * Get Unix time-stamp (epoch time) of the user&#39;s first and last measurements taken.
         * @param sources Enter source name to limit to specific source (varchar)
         * @param user If not specified, uses currently logged in user (bigint)
         */
        public v1MeasurementsRangeGet (sources?: string, user?: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<MeasurementRange> {
            const localVarPath = this.basePath + '/v1/measurementsRange';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (sources !== undefined) {
                queryParameters['sources'] = sources;
            }

            if (user !== undefined) {
                queryParameters['user'] = user;
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
         * Get Measurements CSV
         * Download a CSV containing all user measurements
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsCsvGet (accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
            const localVarPath = this.basePath + '/v2/measurements/csv';

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
         * Delete Measurement
         * Delete Measurement
         * @param id id of Measurement
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsIdDelete (id: number, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse20012> {
            const localVarPath = this.basePath + '/v2/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling v2MeasurementsIdDelete');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
                method: 'DELETE',
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
         * Get Measurement
         * Get Measurement
         * @param id id of Measurement
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsIdGet (id: number, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse20011> {
            const localVarPath = this.basePath + '/v2/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling v2MeasurementsIdGet');
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
         * Update Measurement
         * Update Measurement
         * @param id id of Measurement
         * @param accessToken User&#39;s OAuth2 access token
         * @param body Measurement that should be updated
         */
        public v2MeasurementsIdPut (id: number, accessToken?: string, body?: Measurement, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse20012> {
            const localVarPath = this.basePath + '/v2/measurements/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling v2MeasurementsIdPut');
            }
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
                method: 'PUT',
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
         * Post Request for Measurements CSV
         * Use this endpoint to schedule a CSV export containing all user measurements to be emailed to the user within 24 hours.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsRequestCsvPost (accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/v2/measurements/request_csv';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
                method: 'POST',
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
         * Post Request for Measurements PDF
         * Use this endpoint to schedule a PDF export containing all user measurements to be emailed to the user within 24 hours.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsRequestPdfPost (accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/v2/measurements/request_pdf';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
                method: 'POST',
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
         * Post Request for Measurements XLS
         * Use this endpoint to schedule a XLS export containing all user measurements to be emailed to the user within 24 hours.
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v2MeasurementsRequestXlsPost (accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/v2/measurements/request_xls';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            let httpRequestParams: any = {
                method: 'POST',
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
