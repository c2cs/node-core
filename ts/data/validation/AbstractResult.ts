/// <reference path="../../reference.ts" />

module Core.data.validation {

	/**
	 * Represents the result of a validation operation.
	 * @module Core/data/validation
	 */
	export class AbstractResult {

		private _success:boolean;
		private _errorMessages:string[];

		/**
		 * Creates a new validation result object.
		 * @param {boolean} [success=true] - Whether or not the validation was successful.
		 * @param {(string|string[])} [errorMessages=""] - One or more error messages.
		 * @constructor
		 */
		constructor(success:boolean, errorMessages:string[]);
		constructor(success:boolean, errorMessage:string);
		constructor(success:boolean = true, errorMessages:any = "") {

			this._success = success;

			if( typeof errorMessages === "string" ) {
				if( errorMessages === "" ) {
					errorMessages = [];
				} else {
					errorMessages = [errorMessages];
				}
			}

			this._errorMessages = errorMessages;

		}

	}

}