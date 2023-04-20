import { Component, ElementRef, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import constants from '../constants/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assist-mc';
  classNames = ['Skill 1', 'Skill 2'];
  gatherDataState = constants.stop;
  mobilenet = null;
  trainingDataInputs = [];
  trainingDataOutputs = [];
  examplesCount = [];
  predict = false;
  model = null;
  statusMessage = '';
  disableWebcamButton = false;

  reset() {
    this.predict = false;
    this.examplesCount.length = 0;
    for (let i = 0; i < this.trainingDataInputs.length; i++) {
      this.trainingDataInputs[i].dispose();
    }
    this.trainingDataInputs.length = 0;
    this.trainingDataOutputs.length = 0;
    this.statusMessage = '';
  }

  // ----------- I WANT TO SEE YOUR FACE
  @ViewChild('myWebcam', { static: true }) webcam: ElementRef;
  videoIsPlaying = false;
  video = null;
  // ----------- END OF I WANT TO SEE YOUR FACE

  constructor() {
    this.loadMobileNetFeatureModel();
  }

  async loadMobileNetFeatureModel() {
    // ----------- LOAD EXISTING MODEL

    // const URL =
    //   'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
    // this.mobilenet = await tf.loadGraphModel(URL, { fromTFHub: true });
    // console.log('MobileNet v3 loaded successfully!');
    // this.statusMessage = 'MobileNet v3 loaded successfully!';

    // tf.tidy(() => {
    //   let answer: any = this.mobilenet.predict(
    //     tf.zeros([1, constants.inputHeight, constants.inputWidth, 3])
    //   );
    //   console.log(answer.shape);
    // });

    // ----------- END OF LOAD EXISTING MODEL

    // ----------- LET'S DEFINE A NEW MODEL HEAD

    // this.model = tf.sequential();
    // this.model.add(
    //   tf.layers.dense({ inputShape: [1024], units: 128, activation: 'relu' })
    // );
    // this.model.add(
    //   tf.layers.dense({ units: this.classNames.length, activation: 'softmax' })
    // );

    // this.model.summary();

    // this.model.compile({
    //   optimizer: 'adam',
    //   loss:
    //     this.classNames.length === 2
    //       ? 'binaryCrossentropy'
    //       : 'categoricalCrossentropy',
    //   metrics: ['accuracy'],
    // });

    // ----------- END OF LET'S DEFINE A NEW MODEL HEAD
  }

  // ----------- I WANT TO SEE YOUR FACE

  hasWebcam() {
    // return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  enableWebcam() {
    // this.video = this.webcam.nativeElement;
    // if (this.hasWebcam()) {
    //   // getUsermedia parameters.
    //   const webcamConfig = {
    //     video: true,
    //     width: 640,
    //     height: 480,
    //   };

    //   // Activate the webcam stream.
    //   navigator.mediaDevices.getUserMedia(webcamConfig).then((stream) => {
    //     this.video.srcObject = stream;
    //     this.video.addEventListener('loadeddata', () => {
    //       console.log('Webcam is starting!');
    //       this.videoIsPlaying = true;
    //       this.disableWebcamButton = true;
    //     });
    //   });
    // } else {
    //   console.warn('getUserMedia() is not supported by your browser');
    // }
  }

  // ----------- END OF I WANT TO SEE YOUR FACE

  // ----------- COLLECT ALL THE DATA

  gatherDataForClass(skillNumber) {
    // this.gatherDataState =
    //   this.gatherDataState === constants.stop
    //     ? parseInt(skillNumber)
    //     : constants.stop;
    // console.log('GATHERING', this.gatherDataState);
    // this.dataGatherLoop();
  }

  dataGatherLoop() {
    // if (this.videoIsPlaying && this.gatherDataState !== constants.stop) {
    //   let imageFeatures = tf.tidy(() => {
    //     let videoFrameAsTensor = tf.browser.fromPixels(this.video);
    //     let resizedTensorFrame = tf.image.resizeBilinear(
    //       videoFrameAsTensor,
    //       [constants.inputHeight, constants.inputWidth],
    //       true
    //     );
    //     let normalizedTensorFrame = resizedTensorFrame.div(255);
    //     return this.mobilenet
    //       .predict(normalizedTensorFrame.expandDims())
    //       .squeeze();
    //   });

    //   this.trainingDataInputs.push(imageFeatures);
    //   this.trainingDataOutputs.push(this.gatherDataState);

    //   // Intialize array index element if currently undefined.
    //   if (this.examplesCount[this.gatherDataState] === undefined) {
    //     this.examplesCount[this.gatherDataState] = 0;
    //   }
    //   this.examplesCount[this.gatherDataState]++;
    //   this.statusMessage = '';
    //   for (let n = 0; n < this.classNames.length; n++) {
    //     this.statusMessage +=
    //       this.classNames[n] + ' data count: ' + this.examplesCount[n] + '. ';
    //   }
    //   window.requestAnimationFrame(this.dataGatherLoop.bind(this));
    //   console.log('should run');
    // }
  }

  // ----------- END OF COLLECT ALL THE DATA

  // ----------- TRAIN OUR NEW TOY

  async trainAndPredict() {
    // this.predict = false;
    // tf.util.shuffleCombo(this.trainingDataInputs, this.trainingDataOutputs);
    // let outputsAsTensor = tf.tensor1d(this.trainingDataOutputs, 'int32');
    // let oneHotOutputs = tf.oneHot(outputsAsTensor, this.classNames.length);
    // let inputsAsTensor = tf.stack(this.trainingDataInputs);

    // let results = await this.model.fit(inputsAsTensor, oneHotOutputs, {
    //   shuffle: true,
    //   batchSize: 5,
    //   epochs: 10,
    // });

    // outputsAsTensor.dispose();
    // oneHotOutputs.dispose();
    // inputsAsTensor.dispose();
    // this.predict = true;
    // this.predictLoop();
  }

  predictLoop() {
    // if (this.predict) {
    //   tf.tidy(() => {
    //     let videoFrameAsTensor: any = tf.browser
    //       .fromPixels(this.video)
    //       .div(255);
    //     let resizedTensorFrame = tf.image.resizeBilinear(
    //       videoFrameAsTensor,
    //       [constants.inputHeight, constants.inputWidth],
    //       true
    //     );

    //     let imageFeatures = this.mobilenet.predict(
    //       resizedTensorFrame.expandDims()
    //     );
    //     let prediction = this.model.predict(imageFeatures).squeeze();
    //     let highestIndex = prediction.argMax().arraySync();
    //     let predictionArray = prediction.arraySync();

    //     this.statusMessage =
    //       'Prediction: ' +
    //       this.classNames[highestIndex] +
    //       ' with ' +
    //       Math.floor(predictionArray[highestIndex] * 100) +
    //       '% confidence';
    //   });

    //   window.requestAnimationFrame(this.predictLoop.bind(this));
    // }
  }

  // ----------- END OF TRAIN OUR NEW TOY
}
