/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { OnDestroy } from '@angular/core';
import { AngularDisposable } from 'sql/base/common/lifecycle';


export abstract class CellView extends AngularDisposable implements OnDestroy {
	constructor() {
		super();
	}

	public abstract layout(): void;
}

export interface ICellModel {
	source: string;
	cellType: CellType;
}

export type CellType = 'code' | 'markdown' | 'raw';

export class CellTypes {
    public static readonly Code = 'code';
    public static readonly Markdown = 'markdown';
    public static readonly Raw = 'raw';
}