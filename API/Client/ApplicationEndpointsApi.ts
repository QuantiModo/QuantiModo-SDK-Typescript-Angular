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

    export class ApplicationEndpointsApi {
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
         * Get all Connections
         * Get all Connections
         * @param accessToken Application&#39;s OAuth2 access token
         * @param connectorId The id for the connector data source for which the connection is connected
         * @param connectStatus Indicates whether a connector is currently connected to a service for a user.
         * @param connectError Error message if there is a problem with authorizing this connection.
         * @param updateRequestedAt Time at which an update was requested by a user.
         * @param updateStatus Indicates whether a connector is currently updated.
         * @param updateError Indicates if there was an error during the update.
         * @param lastSuccessfulUpdatedAt The time at which the connector was last successfully updated.
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationConnectionsGet (accessToken?: string, connectorId?: number, connectStatus?: string, connectError?: string, updateRequestedAt?: string, updateStatus?: string, updateError?: string, lastSuccessfulUpdatedAt?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2003> {
            const localVarPath = this.basePath + '/v2/application/connections';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (connectStatus !== undefined) {
                queryParameters['connect_status'] = connectStatus;
            }

            if (connectError !== undefined) {
                queryParameters['connect_error'] = connectError;
            }

            if (updateRequestedAt !== undefined) {
                queryParameters['update_requested_at'] = updateRequestedAt;
            }

            if (updateStatus !== undefined) {
                queryParameters['update_status'] = updateStatus;
            }

            if (updateError !== undefined) {
                queryParameters['update_error'] = updateError;
            }

            if (lastSuccessfulUpdatedAt !== undefined) {
                queryParameters['last_successful_updated_at'] = lastSuccessfulUpdatedAt;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
         * Get all Credentials
         * Get all Credentials
         * @param accessToken Application&#39;s OAuth2 access token
         * @param connectorId The id for the connector data source from which the credential was obtained
         * @param attrKey Attribute name such as token, userid, username, or password
         * @param attrValue Encrypted value for the attribute specified
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationCredentialsGet (accessToken?: string, connectorId?: number, attrKey?: string, attrValue?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2004> {
            const localVarPath = this.basePath + '/v2/application/credentials';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (attrKey !== undefined) {
                queryParameters['attr_key'] = attrKey;
            }

            if (attrValue !== undefined) {
                queryParameters['attr_value'] = attrValue;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
         * Get measurements for all users using your application
         * Measurements are any value that can be recorded like daily steps, a mood rating, or apples eaten.
         * @param accessToken Application&#39;s OAuth2 access token
         * @param clientId The ID of the client application which originally stored the measurement
         * @param connectorId The id for the connector data source from which the measurement was obtained
         * @param variableId ID of the variable for which we are creating the measurement records
         * @param sourceId Application or device used to record the measurement values
         * @param startTime start time for the measurement event. Use ISO 8601 datetime format 
         * @param value The value of the measurement after conversion to the default unit for that variable
         * @param unitId The default unit id for the variable
         * @param originalValue Unconverted value of measurement as originally posted (before conversion to default unit)
         * @param originalUnitId Unit id of the measurement as originally submitted
         * @param duration Duration of the event being measurement in seconds
         * @param note An optional note the user may include with their measurement
         * @param latitude Latitude at which the measurement was taken
         * @param longitude Longitude at which the measurement was taken
         * @param location Optional human readable name for the location where the measurement was recorded
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param error An error message if there is a problem with the measurement
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationMeasurementsGet (accessToken?: string, clientId?: string, connectorId?: number, variableId?: number, sourceId?: number, startTime?: string, value?: number, unitId?: number, originalValue?: number, originalUnitId?: number, duration?: number, note?: string, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, error?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2005> {
            const localVarPath = this.basePath + '/v2/application/measurements';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (variableId !== undefined) {
                queryParameters['variable_id'] = variableId;
            }

            if (sourceId !== undefined) {
                queryParameters['source_id'] = sourceId;
            }

            if (startTime !== undefined) {
                queryParameters['start_time'] = startTime;
            }

            if (value !== undefined) {
                queryParameters['value'] = value;
            }

            if (unitId !== undefined) {
                queryParameters['unit_id'] = unitId;
            }

            if (originalValue !== undefined) {
                queryParameters['original_value'] = originalValue;
            }

            if (originalUnitId !== undefined) {
                queryParameters['original_unit_id'] = originalUnitId;
            }

            if (duration !== undefined) {
                queryParameters['duration'] = duration;
            }

            if (note !== undefined) {
                queryParameters['note'] = note;
            }

            if (latitude !== undefined) {
                queryParameters['latitude'] = latitude;
            }

            if (longitude !== undefined) {
                queryParameters['longitude'] = longitude;
            }

            if (location !== undefined) {
                queryParameters['location'] = location;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (error !== undefined) {
                queryParameters['error'] = error;
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
         * Get tracking reminders
         * Get the variable id, frequency, and default value for the user tracking reminders 
         * @param accessToken User&#39;s OAuth2 access token
         * @param clientId The ID of the client application which last created or updated this trackingReminder
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationTrackingRemindersGet (accessToken?: string, clientId?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2001> {
            const localVarPath = this.basePath + '/v2/application/trackingReminders';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
         * Get all Updates
         * Get all Updates
         * @param accessToken Application&#39;s OAuth2 access token
         * @param connectorId connector_id
         * @param numberOfMeasurements number_of_measurements
         * @param success success
         * @param message message
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationUpdatesGet (accessToken?: string, connectorId?: number, numberOfMeasurements?: number, success?: boolean, message?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2006> {
            const localVarPath = this.basePath + '/v2/application/updates';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (connectorId !== undefined) {
                queryParameters['connector_id'] = connectorId;
            }

            if (numberOfMeasurements !== undefined) {
                queryParameters['number_of_measurements'] = numberOfMeasurements;
            }

            if (success !== undefined) {
                queryParameters['success'] = success;
            }

            if (message !== undefined) {
                queryParameters['message'] = message;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
         * Get all UserVariableRelationships
         * Get all UserVariableRelationships
         * @param accessToken User&#39;s OAuth2 access token
         * @param id id
         * @param confidenceLevel Our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
         * @param confidenceScore A quantitative representation of our confidence that a consistent predictive relationship exists based on the amount of evidence, reproducibility, and other factors
         * @param direction Direction is positive if higher predictor values generally precede higher outcome values. Direction is negative if higher predictor values generally precede lower outcome values.
         * @param durationOfAction Estimated number of seconds following the onset delay in which a stimulus produces a perceivable effect
         * @param errorMessage error_message
         * @param onsetDelay Estimated number of seconds that pass before a stimulus produces a perceivable effect
         * @param outcomeVariableId Variable ID for the outcome variable
         * @param predictorVariableId Variable ID for the predictor variable
         * @param predictorUnitId ID for default unit of the predictor variable
         * @param sinnRank A value representative of the relevance of this predictor relative to other predictors of this outcome.  Usually used for relevancy sorting.
         * @param strengthLevel Can be weak, medium, or strong based on the size of the effect which the predictor appears to have on the outcome relative to other variable relationship strength scores.
         * @param strengthScore A value represented to the size of the effect which the predictor appears to have on the outcome.
         * @param vote vote
         * @param valuePredictingHighOutcome Value for the predictor variable (in it&#39;s default unit) which typically precedes an above average outcome value
         * @param valuePredictingLowOutcome Value for the predictor variable (in it&#39;s default unit) which typically precedes a below average outcome value
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationUserVariableRelationshipsGet (accessToken?: string, id?: number, confidenceLevel?: string, confidenceScore?: number, direction?: string, durationOfAction?: number, errorMessage?: string, onsetDelay?: number, outcomeVariableId?: number, predictorVariableId?: number, predictorUnitId?: number, sinnRank?: number, strengthLevel?: string, strengthScore?: number, vote?: string, valuePredictingHighOutcome?: number, valuePredictingLowOutcome?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2007> {
            const localVarPath = this.basePath + '/v2/application/userVariableRelationships';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (id !== undefined) {
                queryParameters['id'] = id;
            }

            if (confidenceLevel !== undefined) {
                queryParameters['confidence_level'] = confidenceLevel;
            }

            if (confidenceScore !== undefined) {
                queryParameters['confidence_score'] = confidenceScore;
            }

            if (direction !== undefined) {
                queryParameters['direction'] = direction;
            }

            if (durationOfAction !== undefined) {
                queryParameters['duration_of_action'] = durationOfAction;
            }

            if (errorMessage !== undefined) {
                queryParameters['error_message'] = errorMessage;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onset_delay'] = onsetDelay;
            }

            if (outcomeVariableId !== undefined) {
                queryParameters['outcome_variable_id'] = outcomeVariableId;
            }

            if (predictorVariableId !== undefined) {
                queryParameters['predictor_variable_id'] = predictorVariableId;
            }

            if (predictorUnitId !== undefined) {
                queryParameters['predictor_unit_id'] = predictorUnitId;
            }

            if (sinnRank !== undefined) {
                queryParameters['sinn_rank'] = sinnRank;
            }

            if (strengthLevel !== undefined) {
                queryParameters['strength_level'] = strengthLevel;
            }

            if (strengthScore !== undefined) {
                queryParameters['strength_score'] = strengthScore;
            }

            if (vote !== undefined) {
                queryParameters['vote'] = vote;
            }

            if (valuePredictingHighOutcome !== undefined) {
                queryParameters['value_predicting_high_outcome'] = valuePredictingHighOutcome;
            }

            if (valuePredictingLowOutcome !== undefined) {
                queryParameters['value_predicting_low_outcome'] = valuePredictingLowOutcome;
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
         * Get all UserVariables
         * Get all UserVariables
         * @param accessToken User&#39;s OAuth2 access token
         * @param clientId The ID of the client application which last created or updated this user variable
         * @param parentId ID of the parent variable if this variable has any parent
         * @param variableId ID of variable
         * @param defaultUnitId D of unit to use for this variable
         * @param minimumAllowedValue Minimum reasonable value for this variable (uses default unit)
         * @param maximumAllowedValue Maximum reasonable value for this variable (uses default unit)
         * @param fillingValue Value for replacing null measurements
         * @param joinWith The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables
         * @param onsetDelay Estimated number of seconds that pass before a stimulus produces a perceivable effect
         * @param durationOfAction Estimated duration of time following the onset delay in which a stimulus produces a perceivable effect
         * @param variableCategoryId ID of variable category
         * @param updated updated
         * @param _public Is variable public
         * @param causeOnly A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
         * @param fillingType 0 -&gt; No filling, 1 -&gt; Use filling-value
         * @param numberOfMeasurements Number of measurements
         * @param numberOfProcessedMeasurements Number of processed measurements
         * @param measurementsAtLastAnalysis Number of measurements at last analysis
         * @param lastUnitId ID of last Unit
         * @param lastOriginalUnitId ID of last original Unit
         * @param lastOriginalValue Last original value which is stored
         * @param lastValue Last Value
         * @param lastSourceId ID of last source
         * @param numberOfCorrelations Number of correlations for this variable
         * @param status status
         * @param errorMessage error_message
         * @param lastSuccessfulUpdateTime When this variable or its settings were last updated
         * @param standardDeviation Standard deviation
         * @param variance Variance
         * @param minimumRecordedValue Minimum recorded value of this variable
         * @param maximumRecordedValue Maximum recorded value of this variable
         * @param mean Mean
         * @param median Median
         * @param mostCommonUnitId Most common Unit ID
         * @param mostCommonValue Most common value
         * @param numberOfUniqueDailyValues Number of unique daily values
         * @param numberOfChanges Number of changes
         * @param skewness Skewness
         * @param kurtosis Kurtosis
         * @param latitude Latitude
         * @param longitude Longitude
         * @param location Location
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param outcome Outcome variables (those with &#x60;outcome&#x60; &#x3D;&#x3D; 1) are variables for which a human would generally want to identify the influencing factors.  These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
         * @param sources Comma-separated list of source names to limit variables to those sources
         * @param earliestSourceTime Earliest source time
         * @param latestSourceTime Latest source time
         * @param earliestMeasurementTime Earliest measurement time
         * @param latestMeasurementTime Latest measurement time
         * @param earliestFillingTime Earliest filling time
         * @param latestFillingTime Latest filling time
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationUserVariablesGet (accessToken?: string, clientId?: string, parentId?: number, variableId?: number, defaultUnitId?: number, minimumAllowedValue?: number, maximumAllowedValue?: number, fillingValue?: number, joinWith?: number, onsetDelay?: number, durationOfAction?: number, variableCategoryId?: number, updated?: number, _public?: number, causeOnly?: boolean, fillingType?: string, numberOfMeasurements?: number, numberOfProcessedMeasurements?: number, measurementsAtLastAnalysis?: number, lastUnitId?: number, lastOriginalUnitId?: number, lastOriginalValue?: number, lastValue?: number, lastSourceId?: number, numberOfCorrelations?: number, status?: string, errorMessage?: string, lastSuccessfulUpdateTime?: string, standardDeviation?: number, variance?: number, minimumRecordedValue?: number, maximumRecordedValue?: number, mean?: number, median?: number, mostCommonUnitId?: number, mostCommonValue?: number, numberOfUniqueDailyValues?: number, numberOfChanges?: number, skewness?: number, kurtosis?: number, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, outcome?: boolean, sources?: string, earliestSourceTime?: number, latestSourceTime?: number, earliestMeasurementTime?: number, latestMeasurementTime?: number, earliestFillingTime?: number, latestFillingTime?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2008> {
            const localVarPath = this.basePath + '/v2/application/userVariables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (parentId !== undefined) {
                queryParameters['parent_id'] = parentId;
            }

            if (variableId !== undefined) {
                queryParameters['variable_id'] = variableId;
            }

            if (defaultUnitId !== undefined) {
                queryParameters['default_unit_id'] = defaultUnitId;
            }

            if (minimumAllowedValue !== undefined) {
                queryParameters['minimum_allowed_value'] = minimumAllowedValue;
            }

            if (maximumAllowedValue !== undefined) {
                queryParameters['maximum_allowed_value'] = maximumAllowedValue;
            }

            if (fillingValue !== undefined) {
                queryParameters['filling_value'] = fillingValue;
            }

            if (joinWith !== undefined) {
                queryParameters['join_with'] = joinWith;
            }

            if (onsetDelay !== undefined) {
                queryParameters['onset_delay'] = onsetDelay;
            }

            if (durationOfAction !== undefined) {
                queryParameters['duration_of_action'] = durationOfAction;
            }

            if (variableCategoryId !== undefined) {
                queryParameters['variable_category_id'] = variableCategoryId;
            }

            if (updated !== undefined) {
                queryParameters['updated'] = updated;
            }

            if (_public !== undefined) {
                queryParameters['public'] = _public;
            }

            if (causeOnly !== undefined) {
                queryParameters['cause_only'] = causeOnly;
            }

            if (fillingType !== undefined) {
                queryParameters['filling_type'] = fillingType;
            }

            if (numberOfMeasurements !== undefined) {
                queryParameters['number_of_measurements'] = numberOfMeasurements;
            }

            if (numberOfProcessedMeasurements !== undefined) {
                queryParameters['number_of_processed_measurements'] = numberOfProcessedMeasurements;
            }

            if (measurementsAtLastAnalysis !== undefined) {
                queryParameters['measurements_at_last_analysis'] = measurementsAtLastAnalysis;
            }

            if (lastUnitId !== undefined) {
                queryParameters['last_unit_id'] = lastUnitId;
            }

            if (lastOriginalUnitId !== undefined) {
                queryParameters['last_original_unit_id'] = lastOriginalUnitId;
            }

            if (lastOriginalValue !== undefined) {
                queryParameters['last_original_value'] = lastOriginalValue;
            }

            if (lastValue !== undefined) {
                queryParameters['last_value'] = lastValue;
            }

            if (lastSourceId !== undefined) {
                queryParameters['last_source_id'] = lastSourceId;
            }

            if (numberOfCorrelations !== undefined) {
                queryParameters['number_of_correlations'] = numberOfCorrelations;
            }

            if (status !== undefined) {
                queryParameters['status'] = status;
            }

            if (errorMessage !== undefined) {
                queryParameters['error_message'] = errorMessage;
            }

            if (lastSuccessfulUpdateTime !== undefined) {
                queryParameters['last_successful_update_time'] = lastSuccessfulUpdateTime;
            }

            if (standardDeviation !== undefined) {
                queryParameters['standard_deviation'] = standardDeviation;
            }

            if (variance !== undefined) {
                queryParameters['variance'] = variance;
            }

            if (minimumRecordedValue !== undefined) {
                queryParameters['minimum_recorded_value'] = minimumRecordedValue;
            }

            if (maximumRecordedValue !== undefined) {
                queryParameters['maximum_recorded_value'] = maximumRecordedValue;
            }

            if (mean !== undefined) {
                queryParameters['mean'] = mean;
            }

            if (median !== undefined) {
                queryParameters['median'] = median;
            }

            if (mostCommonUnitId !== undefined) {
                queryParameters['most_common_unit_id'] = mostCommonUnitId;
            }

            if (mostCommonValue !== undefined) {
                queryParameters['most_common_value'] = mostCommonValue;
            }

            if (numberOfUniqueDailyValues !== undefined) {
                queryParameters['number_of_unique_daily_values'] = numberOfUniqueDailyValues;
            }

            if (numberOfChanges !== undefined) {
                queryParameters['number_of_changes'] = numberOfChanges;
            }

            if (skewness !== undefined) {
                queryParameters['skewness'] = skewness;
            }

            if (kurtosis !== undefined) {
                queryParameters['kurtosis'] = kurtosis;
            }

            if (latitude !== undefined) {
                queryParameters['latitude'] = latitude;
            }

            if (longitude !== undefined) {
                queryParameters['longitude'] = longitude;
            }

            if (location !== undefined) {
                queryParameters['location'] = location;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
            }

            if (outcome !== undefined) {
                queryParameters['outcome'] = outcome;
            }

            if (sources !== undefined) {
                queryParameters['sources'] = sources;
            }

            if (earliestSourceTime !== undefined) {
                queryParameters['earliest_source_time'] = earliestSourceTime;
            }

            if (latestSourceTime !== undefined) {
                queryParameters['latest_source_time'] = latestSourceTime;
            }

            if (earliestMeasurementTime !== undefined) {
                queryParameters['earliest_measurement_time'] = earliestMeasurementTime;
            }

            if (latestMeasurementTime !== undefined) {
                queryParameters['latest_measurement_time'] = latestMeasurementTime;
            }

            if (earliestFillingTime !== undefined) {
                queryParameters['earliest_filling_time'] = earliestFillingTime;
            }

            if (latestFillingTime !== undefined) {
                queryParameters['latest_filling_time'] = latestFillingTime;
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
         * Get all VariableUserSources
         * Get all VariableUserSources
         * @param accessToken User&#39;s OAuth2 access token
         * @param variableId ID of variable
         * @param timestamp Time that this measurement occurred Uses epoch minute (epoch time divided by 60)
         * @param earliestMeasurementTime Earliest measurement time
         * @param latestMeasurementTime Latest measurement time
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationVariableUserSourcesGet (accessToken?: string, variableId?: number, timestamp?: number, earliestMeasurementTime?: number, latestMeasurementTime?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse2009> {
            const localVarPath = this.basePath + '/v2/application/variableUserSources';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (variableId !== undefined) {
                queryParameters['variable_id'] = variableId;
            }

            if (timestamp !== undefined) {
                queryParameters['timestamp'] = timestamp;
            }

            if (earliestMeasurementTime !== undefined) {
                queryParameters['earliest_measurement_time'] = earliestMeasurementTime;
            }

            if (latestMeasurementTime !== undefined) {
                queryParameters['latest_measurement_time'] = latestMeasurementTime;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
         * Get all Votes
         * Get all Votes
         * @param accessToken User&#39;s OAuth2 access token
         * @param clientId The ID of the client application which last created or updated this vote
         * @param causeId ID of predictor variable
         * @param effectId ID of outcome variable
         * @param value Value of Vote. 1 is for upvote. 0 is for downvote.  Otherwise, there is no vote.
         * @param createdAt When the record was first created. Use ISO 8601 datetime format 
         * @param updatedAt When the record was last updated. Use ISO 8601 datetime format 
         * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0. The maximum limit is 200 records.
         * @param offset OFFSET says to skip that many rows before beginning to return rows to the client. OFFSET 0 is the same as omitting the OFFSET clause. If both OFFSET and LIMIT appear, then OFFSET rows are skipped before starting to count the LIMIT rows that are returned.
         * @param sort Sort by given field. If the field is prefixed with &#39;-&#39;, it will sort in descending order.
         */
        public v2ApplicationVotesGet (accessToken?: string, clientId?: string, causeId?: number, effectId?: number, value?: number, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse20010> {
            const localVarPath = this.basePath + '/v2/application/votes';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (accessToken !== undefined) {
                queryParameters['access_token'] = accessToken;
            }

            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
            }

            if (causeId !== undefined) {
                queryParameters['cause_id'] = causeId;
            }

            if (effectId !== undefined) {
                queryParameters['effect_id'] = effectId;
            }

            if (value !== undefined) {
                queryParameters['value'] = value;
            }

            if (createdAt !== undefined) {
                queryParameters['created_at'] = createdAt;
            }

            if (updatedAt !== undefined) {
                queryParameters['updated_at'] = updatedAt;
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
    }
}
