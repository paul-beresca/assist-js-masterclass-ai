const STATUS = document.getElementById('status');
const VIDEO = document.getElementById('webcam');
const ENABLE_CAM_BUTTON = document.getElementById('enableCam');
const RESET_BUTTON = document.getElementById('reset');
const TRAIN_BUTTON = document.getElementById('train');
const MOBILE_NET_INPUT_WIDTH = 224;
const MOBILE_NET_INPUT_HEIGHT = 224;
const STOP_DATA_GATHER = -1;
const CLASS_NAMES: Array<any> = [];

const constants = {
  status: STATUS,
  video: VIDEO,
  enableCamButton: ENABLE_CAM_BUTTON,
  resetButton: RESET_BUTTON,
  trainButton: TRAIN_BUTTON,
  inputWidth: MOBILE_NET_INPUT_WIDTH,
  inputHeight: MOBILE_NET_INPUT_HEIGHT,
  stop: STOP_DATA_GATHER,
  classNames: CLASS_NAMES,
};
export default constants;
