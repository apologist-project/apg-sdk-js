// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Apologist } from '../client';

export abstract class APIResource {
  protected _client: Apologist;

  constructor(client: Apologist) {
    this._client = client;
  }
}
