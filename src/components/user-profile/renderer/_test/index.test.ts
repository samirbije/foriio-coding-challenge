
/**
 * @jest-environment jsdom
 */
import { assert } from 'chai';
import * as sinon from 'sinon';

import { Renderer } from '../../../user-profile-worker/renderer/index';

describe('testing events of message form page', () => {
  const state = {
    name: '',
    contact_email: ''

  }

  let instance = new Renderer(state);

  instance.state = { ...instance.state }


  it('should call componentDidMount when call API succesfully', async () => {
    let stubedFetch = sinon.stub(window, 'fetch');
    const expected = {
      profile: {
        name: '',
        contact_email: ''
      }
    };
    stubedFetch.returns(Promise.resolve(mockApiResponse(expected)));

    await instance.componentDidMount();
    assert.deepEqual(instance.props, expected.profile);
  });

  it('should call getUrlId', () => {
    let stubedFetch = sinon.stub(window, 'location');
    stubedFetch.returns('');

    const urlLastSigment = instance.getUrlId();
    assert.strictEqual(urlLastSigment, '');
  });


});


function mockApiResponse(body: {}) {
  return new window.Response(JSON.stringify(body), {
    status: 200,
    headers: { 'Content-type': 'application/json' }
  });
}