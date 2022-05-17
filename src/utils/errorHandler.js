const errorCodes = {
  updateOrderFailed: '更新失敗,請稍後再試',
};

export default (alert, errorCode) => {
  if (errorCodes[errorCode]) {
    alert(errorCodes[errorCode]);
  } else {
    alert('sorry，目前服務不可用，請稍後再試或聯絡管理員。');
  }
};
