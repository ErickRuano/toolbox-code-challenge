'use strict';

module.exports = class EchoRepository {

  constructor(Echo){
    this.Echo = Echo
  }

  persist() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  getByEmail() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  find() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};