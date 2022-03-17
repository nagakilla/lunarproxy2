self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/proxy/uv.handler.js',
    bundle: '/proxy/uv.bundle.js',
    config: '/proxy/uv.config.js',
    sw: '/proxy/uv.sw.js',
};
