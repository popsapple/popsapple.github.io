const updateTransform = (element, property, value) => {
    const currentTransform = element.style.transform;

    // 정규식으로 해당 속성이 있는지 확인
    const regex = new RegExp(`${property}\\(([^)]+)\\)`); // 예: rotate(45deg)

    if (currentTransform.match(regex)) {
      // 기존 속성이 있으면 대체
      element.style.transform = currentTransform.replace(regex, `${property}(${value})`);
    } else {
      // 속성이 없으면 새로 추가
      if (currentTransform) {
        element.style.transform += ` ${property}(${value})`;
      } else {
        element.style.transform = `${property}(${value})`;
      }
    }
  }

  export default updateTransform