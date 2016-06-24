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

    export class RemindersApi {
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
         * Get specific pending tracking reminders
         * Specfic pending reminder instances that still need to be tracked.  
         * @param accessToken User&#39;s OAuth2 access token
         * @param variableCategoryName Limit tracking reminder notifications to a specific variable category
         * @param createdAt When the record was first created. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v1TrackingReminderNotificationsGet (accessToken?: string, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse200> {
            const localVarPath = this.basePath + '/v1/trackingReminderNotifications';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = variableCategoryName;
            }

            if (createdAt !== undefined) {
                queryParameters['createdAt'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updatedAt'] = updatedAt;
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
         * Skip a pending tracking reminder
         * Deletes the pending tracking reminder
         * @param body Id of the pending reminder to be skipped or deleted
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1TrackingReminderNotificationsSkipPost (body: TrackingReminderNotificationSkip, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/trackingReminderNotifications/skip';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1TrackingReminderNotificationsSkipPost');
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
         * Snooze a pending tracking reminder
         * Changes the reminder time to now plus one hour
         * @param body Id of the pending reminder to be snoozed
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1TrackingReminderNotificationsSnoozePost (body: TrackingReminderNotificationSnooze, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/trackingReminderNotifications/snooze';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1TrackingReminderNotificationsSnoozePost');
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
         * Track a pending tracking reminder
         * Adds the default measurement for the pending tracking reminder with the reminder time as the measurment start time
         * @param body Id of the pending reminder to be tracked
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1TrackingReminderNotificationsTrackPost (body: TrackingReminderNotificationTrack, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/trackingReminderNotifications/track';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1TrackingReminderNotificationsTrackPost');
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
         * Delete tracking reminder
         * Delete previously created tracking reminder
         * @param body Id of reminder to be deleted
         * @param accessToken User&#39;s OAuth2 access token
         */
        public v1TrackingRemindersDeletePost (body: TrackingReminderDelete, accessToken?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<CommonResponse> {
            const localVarPath = this.basePath + '/v1/trackingReminders/delete';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'body' is set
            if (!body) {
                throw new Error('Missing required parameter body when calling v1TrackingRemindersDeletePost');
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
         * Get repeating tracking reminder settings
         * Users can be reminded to track certain variables at a specified frequency with a default value.  
         * @param accessToken User&#39;s OAuth2 access token
         * @param variableCategoryName Limit tracking reminders to a specific variable category
         * @param createdAt When the record was first created. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format. Time zone should be UTC and not local. 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v1TrackingRemindersGet (accessToken?: string, variableCategoryName?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2001> {
            const localVarPath = this.basePath + '/v1/trackingReminders';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (variableCategoryName !== undefined) {
                queryParameters['variableCategoryName'] = variableCategoryName;
            }

            if (createdAt !== undefined) {
                queryParameters['createdAt'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updatedAt'] = updatedAt;
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
         * Store a Tracking Reminder
         * This is to enable users to create reminders to track a variable with a default value at a specified frequency
         * @param accessToken User&#39;s OAuth2 access token
         * @param body TrackingReminder that should be stored
         */
        public v1TrackingRemindersPost (accessToken?: string, body?: TrackingReminder, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2002> {
            const localVarPath = this.basePath + '/v1/trackingReminders';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
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
