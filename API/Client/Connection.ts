/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Connection {

        /**
         * id
         */
        id: number;

        /**
         * user_id
         */
        userId: number;

        /**
         * connector_id
         */
        connectorId: number;

        /**
         * connect_status
         */
        connectStatus: string;

        /**
         * connect_error
         */
        connectError: string;

        /**
         * update_requested_at
         */
        updateRequestedAt: Date;

        /**
         * update_status
         */
        updateStatus: string;

        /**
         * update_error
         */
        updateError: string;

        /**
         * last_successful_updated_at
         */
        lastSuccessfulUpdatedAt: Date;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;
    }

}