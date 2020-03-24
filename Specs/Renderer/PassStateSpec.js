import { PassState } from '../../Source/Cesium.js';

describe('Renderer/PassState', function() {

    it('creates a pass state', function() {
        var context = {};
        var passState = new PassState(context);
        expect(passState.context).toBe(context);
        expect(passState.framebuffer).not.toBeDefined();
        expect(passState.blendingEnabled).not.toBeDefined();
        expect(passState.scissorTest).not.toBeDefined();
        expect(passState.viewport).not.toBeDefined();
        expect(passState.depthMask).not.toBeDefined();
        expect(passState.depthFunction).not.toBeDefined();
    });
});
