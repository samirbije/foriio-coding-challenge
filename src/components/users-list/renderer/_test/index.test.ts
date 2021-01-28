
/**
 * @jest-environment jsdom
 */
import { assert } from 'chai';
import * as sinon from 'sinon';

import { Renderer } from '../../../user-profile-worker/renderer/index';

describe('testing events of message form page', () => {
    const state = {
        users: []
    }

    let instance = new Renderer(state);

    instance.state = { ...instance.state }


    it('should call componentDidMount when call API succesfully', async () => {
        let stubedFetch = sinon.stub(window, 'fetch');
        const expected = {
            users: {
                users: []
            }
        };
        stubedFetch.returns(Promise.resolve(mockApiResponse(expected)));

        await instance.componentDidMount();
        assert.deepEqual(instance.props, expected.users);
    });

});


function mockApiResponse(body: {}) {
    return new window.Response(JSON.stringify(body), {
        status: 200,
        headers: { 'Content-type': 'application/json' }
    });
}