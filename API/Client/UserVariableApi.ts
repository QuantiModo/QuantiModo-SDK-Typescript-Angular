/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class UserVariableApi {
        protected basePath = 'https://app.quantimo.do/api/v2';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
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


        public userVariablesGet (clientId?: string, variableId?: number, defaultUnitId?: number, minimumAllowedValue?: number, maximumAllowedValue?: number, fillingValue?: number, joinWith?: number, onsetDelay?: number, durationOfAction?: number, variableCategoryId?: number, updated?: number, _public?: number, causeOnly?: boolean, fillingType?: string, numberOfMeasurements?: number, numberOfProcessedMeasurements?: number, measurementsAtLastAnalysis?: number, lastUnitId?: number, lastOriginalUnitId?: number, lastOriginalValue?: number, lastValue?: number, lastSourceId?: number, numberOfCorrelations?: number, status?: string, errorMessage?: string, lastSuccessfulUpdateTime?: string, standardDeviation?: number, variance?: number, minimumRecordedDailyValue?: number, maximumRecordedDailyValue?: number, mean?: number, median?: number, mostCommonUnitId?: number, mostCommonValue?: number, numberOfUniqueDailyValues?: number, numberOfChanges?: number, skewness?: number, kurtosis?: number, latitude?: number, longitude?: number, location?: string, createdAt?: string, updatedAt?: string, outcome?: boolean, sources?: string, earliestSourceTime?: number, latestSourceTime?: number, earliestMeasurementTime?: number, latestMeasurementTime?: number, earliestFillingTime?: number, latestFillingTime?: number, limit?: number, offset?: number, sort?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_21> {
            const path = this.basePath + '/userVariables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (clientId !== undefined) {
                queryParameters['client_id'] = clientId;
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

            if (minimumRecordedDailyValue !== undefined) {
                queryParameters['minimum_recorded_daily_value'] = minimumRecordedDailyValue;
            }

            if (maximumRecordedDailyValue !== undefined) {
                queryParameters['maximum_recorded_daily_value'] = maximumRecordedDailyValue;
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
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public userVariablesPost (body?: UserVariable, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_22> {
            const path = this.basePath + '/userVariables';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            let httpRequestParams: any = {
                method: 'POST',
                url: path,
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

        public userVariablesIdGet (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_22> {
            const path = this.basePath + '/userVariables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling userVariablesIdGet');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: path,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        public userVariablesIdPut (id: number, body?: UserVariable, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/userVariables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling userVariablesIdPut');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: path,
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

        public userVariablesIdDelete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<inline_response_200_2> {
            const path = this.basePath + '/userVariables/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is set
            if (!id) {
                throw new Error('Missing required parameter id when calling userVariablesIdDelete');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: path,
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
