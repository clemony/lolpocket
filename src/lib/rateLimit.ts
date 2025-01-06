import Bottleneck from 'bottleneck'

export const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333,
})

// promise
export const limit = (f) => {
    return limiter.wrap(f)
}
