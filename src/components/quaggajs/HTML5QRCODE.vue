<!-- eslint-disable no-unused-vars -->
<script setup>
import {
    onBeforeUnmount,
    onMounted,
    ref,
} from 'vue';

import { Html5Qrcode } from 'html5-qrcode';

const elementId = ref('reader')
const turn = ref(0)
const code = ref('')
const cameraId = ref('')
const onScanSuccess = (decodedText, decodedResult) => {
    console.log(`Code matched = ${decodedText}`, decodedResult)
    code.value = decodedText
    turn.value = turn.value + 1
}

const onScanFailure = (error) => {
    console.warn(`Code scan error = ${error}`)
}


async function startScan() {
    console.log("cameraId", cameraId.value)
    const html5QrCode = new Html5Qrcode(elementId.value)
    const videoConstraints = {
        // focusMode: 'continuous',
        // exposureMode: 'continuous',
        // whiteBalanceMode: 'continuous',
        // pointsOfInterest: { x: 500, y: 500 },
        // iso: 600

    }
    const config = {
        fps: 10, videoConstraints
    }
    // If you want to prefer front camera
    html5QrCode.start(
        { facingMode: 'environment', whiteBalanceMode: 'continuous' },
        config,
        onScanSuccess,
        onScanFailure
    )
}
onMounted(() => {
    console.log('onMounted')
    startScan()
})

// onBeforeUnmount(() => {
//     const html5QrCode = new Html5Qrcode(elementId.value)
//     html5QrCode
//         .stop()
//         .then((ignore) => {
//             console.log({ ignore })
//             // QR Code scanning is stopped.
//         })
//         .catch((err) => {
//             console.log(err)
//             // Stop failed, handle it.
//         })
// })
</script>
<template>
    <div>
        <h1>HTML5 QRCODE</h1>
        <p>scan Num:{{ turn }}</p>
        <p>Code: {{ code }}</p>
        <div id="reader">123</div>
    </div>
</template>
<style>
#reader {
    background: gray;
    height: 300px;
    width: 500px;
}
</style>
