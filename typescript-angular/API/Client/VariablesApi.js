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
        var VariablesApi = (function () {
            function VariablesApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'https://app.quantimo.do/api';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            VariablesApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             * Get public variables
             * This endpoint retrieves an array of all public variables. Public variables are things like foods, medications, symptoms, conditions, and anything not unique to a particular user. For instance, a telephone number or name would not be a public variable.
             * @param userId User&#39;s id
             * @param id Common variable id
             * @param category Filter data by category
             * @param name Original name of the variable (supports exact name match only)
             * @param updatedAt Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
             * @param source The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here
             * @param latestMeasurementTime Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
             * @param numberOfRawMeasurements Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.
             * @param lastSource Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)
             * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
             * @param offset Since the maximum limit is 200 records, to get more than that you&#39;ll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the &#x60;limit&#x60; and &#x60;offset&#x60; query parameters.  For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters, &#x60;imit&#x3D;20&amp;offset&#x3D;60&#x60;.
             * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
             */
            VariablesApi.prototype.v1PublicVariablesGet = function (userId, id, category, name, updatedAt, source, latestMeasurementTime, numberOfRawMeasurements, lastSource, limit, offset, sort, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/public/variables';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (id !== undefined) {
                    queryParameters['id'] = id;
                }
                if (category !== undefined) {
                    queryParameters['category'] = category;
                }
                if (name !== undefined) {
                    queryParameters['name'] = name;
                }
                if (updatedAt !== undefined) {
                    queryParameters['updatedAt'] = updatedAt;
                }
                if (source !== undefined) {
                    queryParameters['source'] = source;
                }
                if (latestMeasurementTime !== undefined) {
                    queryParameters['latestMeasurementTime'] = latestMeasurementTime;
                }
                if (numberOfRawMeasurements !== undefined) {
                    queryParameters['numberOfRawMeasurements'] = numberOfRawMeasurements;
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
             * Get top 5 PUBLIC variables with the most correlations
             * Get top 5 PUBLIC variables with the most correlations containing the entered search characters. For example, search for &#39;mood&#39; as an effect. Since &#39;Overall Mood&#39; has a lot of correlations with other variables, it should be in the autocomplete list.Supported filter parameters:&lt;ul&gt;&lt;li&gt;&lt;b&gt;category&lt;/b&gt; - Category of Variable&lt;/li&gt;&lt;/ul&gt;
             * @param search Search query can be some fraction of a variable name.
             * @param userId User&#39;s id
             * @param variableCategoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
             * @param source Specify a data source name to only return variables from a specific data source.
             * @param effectOrCause Indicate if you only want variables that have user correlations. Possible values are effect and cause.
             * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
             * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
             * @param offset Since the maximum limit is 200 records, to get more than that you&#39;ll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the &#x60;limit&#x60; and &#x60;offset&#x60; query parameters.  For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters, &#x60;imit&#x3D;20&amp;offset&#x3D;60&#x60;.
             * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
             */
            VariablesApi.prototype.v1PublicVariablesSearchSearchGet = function (search, userId, variableCategoryName, source, effectOrCause, publicEffectOrCause, limit, offset, sort, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/public/variables/search/{search}'
                    .replace('{' + 'search' + '}', String(search));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new Error('Required parameter search was null or undefined when calling v1PublicVariablesSearchSearchGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (variableCategoryName !== undefined) {
                    queryParameters['variableCategoryName'] = variableCategoryName;
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
             * Delete All Measurements For Variable
             * Users can delete all of their measurements for a variable
             * @param variableId Id of the variable whose measurements should be deleted
             */
            VariablesApi.prototype.v1UserVariablesDeletePost = function (variableId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/userVariables/delete';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'variableId' is not null or undefined
                if (variableId === null || variableId === undefined) {
                    throw new Error('Required parameter variableId was null or undefined when calling v1UserVariablesDeletePost.');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: variableId,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Update User Settings for a Variable
             * Users can change the parameters used in analysis of that variable such as the expected duration of action for a variable to have an effect, the estimated delay before the onset of action. In order to filter out erroneous data, they are able to set the maximum and minimum reasonable daily values for a variable.
             * @param userVariables Variable user settings data
             */
            VariablesApi.prototype.v1UserVariablesPost = function (userVariables, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/userVariables';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'userVariables' is not null or undefined
                if (userVariables === null || userVariables === undefined) {
                    throw new Error('Required parameter userVariables was null or undefined when calling v1UserVariablesPost.');
                }
                var httpRequestParams = {
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
            };
            /**
             * Reset user settings for a variable to defaults
             * Reset user settings for a variable to defaults
             * @param variableId Id of the variable that should be reset
             */
            VariablesApi.prototype.v1UserVariablesResetPost = function (variableId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/userVariables/reset';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'variableId' is not null or undefined
                if (variableId === null || variableId === undefined) {
                    throw new Error('Required parameter variableId was null or undefined when calling v1UserVariablesResetPost.');
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: variableId,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Variable categories
             * The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
             */
            VariablesApi.prototype.v1VariableCategoriesGet = function (extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/variableCategories';
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
             * Get variables with user&#39;s settings
             * Get variables for which the user has measurements. If the user has specified variable settings, these are provided instead of the common variable defaults.
             * @param userId User&#39;s id
             * @param id Common variable id
             * @param category Filter data by category
             * @param name Original name of the variable (supports exact name match only)
             * @param updatedAt Filter by the last time any of the properties of the variable were changed. Uses UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
             * @param source The name of the data source that created the variable (supports exact name match only). So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here
             * @param latestMeasurementTime Filter variables based on the last time a measurement for them was created or updated in the UTC format \&quot;YYYY-MM-DDThh:mm:ss\&quot;
             * @param numberOfRawMeasurements Filter variables by the total number of measurements that they have. This could be used of you want to filter or sort by popularity.
             * @param lastSource Limit variables to those which measurements were last submitted by a specific source. So if you have a client application and you only want variables that were last updated by your app, you can include the name of your app here. (supports exact name match only)
             * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
             * @param offset Since the maximum limit is 200 records, to get more than that you&#39;ll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the &#x60;limit&#x60; and &#x60;offset&#x60; query parameters.  For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters, &#x60;imit&#x3D;20&amp;offset&#x3D;60&#x60;.
             * @param sort Sort by given field. If the field is prefixed with &#x60;-, it will sort in descending order.
             */
            VariablesApi.prototype.v1VariablesGet = function (userId, id, category, name, updatedAt, source, latestMeasurementTime, numberOfRawMeasurements, lastSource, limit, offset, sort, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/variables';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (id !== undefined) {
                    queryParameters['id'] = id;
                }
                if (category !== undefined) {
                    queryParameters['category'] = category;
                }
                if (name !== undefined) {
                    queryParameters['name'] = name;
                }
                if (updatedAt !== undefined) {
                    queryParameters['updatedAt'] = updatedAt;
                }
                if (source !== undefined) {
                    queryParameters['source'] = source;
                }
                if (latestMeasurementTime !== undefined) {
                    queryParameters['latestMeasurementTime'] = latestMeasurementTime;
                }
                if (numberOfRawMeasurements !== undefined) {
                    queryParameters['numberOfRawMeasurements'] = numberOfRawMeasurements;
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
             * Create Variables
             * Allows the client to create a new variable in the &#x60;variables&#x60; table.
             * @param body Original name for the variable.
             * @param userId User&#39;s id
             */
            VariablesApi.prototype.v1VariablesPost = function (body, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/variables';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new Error('Required parameter body was null or undefined when calling v1VariablesPost.');
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
             * Get variables by search query
             * Get variables containing the search characters for which the currently logged in user has measurements. Used to provide auto-complete function in variable search boxes.
             * @param search Search query which may be an entire variable name or a fragment of one.
             * @param userId User&#39;s id
             * @param variableCategoryName Filter variables by category name. The variable categories include Activity, Causes of Illness, Cognitive Performance, Conditions, Environment, Foods, Location, Miscellaneous, Mood, Nutrition, Physical Activity, Physique, Sleep, Social Interactions, Symptoms, Treatments, Vital Signs, and Work.
             * @param includePublic Set to true if you would like to include public variables when no user variables are found.
             * @param manualTracking Set to true if you would like to exlude variables like apps and website names.
             * @param source Specify a data source name to only return variables from a specific data source.
             * @param effectOrCause Indicate if you only want variables that have user correlations. Possible values are effect and cause.
             * @param publicEffectOrCause Indicate if you only want variables that have aggregated correlations.  Possible values are effect and cause.
             * @param limit The LIMIT is used to limit the number of results returned. So if you have 1000 results, but only want to the first 10, you would set this to 10 and offset to 0.
             * @param offset Since the maximum limit is 200 records, to get more than that you&#39;ll have to make multiple API calls and page through the results. To retrieve all the data, you can iterate through data by using the &#x60;limit&#x60; and &#x60;offset&#x60; query parameters.  For example, if you want to retrieve data from 61-80 then you can use a query with the following parameters, &#x60;imit&#x3D;20&amp;offset&#x3D;60&#x60;.
             */
            VariablesApi.prototype.v1VariablesSearchSearchGet = function (search, userId, variableCategoryName, includePublic, manualTracking, source, effectOrCause, publicEffectOrCause, limit, offset, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/variables/search/{search}'
                    .replace('{' + 'search' + '}', String(search));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'search' is not null or undefined
                if (search === null || search === undefined) {
                    throw new Error('Required parameter search was null or undefined when calling v1VariablesSearchSearchGet.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                if (variableCategoryName !== undefined) {
                    queryParameters['variableCategoryName'] = variableCategoryName;
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
             * Get info about a variable
             * Get all of the settings and information about a variable by its name. If the logged in user has modified the settings for the variable, these will be provided instead of the default settings for that variable.
             * @param variableName Variable name
             * @param userId User&#39;s id
             */
            VariablesApi.prototype.v1VariablesVariableNameGet = function (variableName, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/variables/{variableName}'
                    .replace('{' + 'variableName' + '}', String(variableName));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'variableName' is not null or undefined
                if (variableName === null || variableName === undefined) {
                    throw new Error('Required parameter variableName was null or undefined when calling v1VariablesVariableNameGet.');
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
            return VariablesApi;
        }());
        VariablesApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
        Client.VariablesApi = VariablesApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));
