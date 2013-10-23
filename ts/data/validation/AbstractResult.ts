/// <reference path="../../reference.ts" />

module Core.data.validation {

	export class AbstractResult {

		private _success:boolean;
		private _errorMessages:string[];

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