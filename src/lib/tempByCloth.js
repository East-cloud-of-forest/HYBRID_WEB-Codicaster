export default function tempByCloth(curtemp) {
  let clothTag = []
  let clothText = ``
  let boxColor = ``
  console.log(curtemp)
  if (curtemp >= 28) {
    clothTag = ['민소매', '반팔', '반바지']
    clothText = `너무 더워요. 얇게 입어 열사병에 주의하고 실내에 있기로 해요.`
    boxColor = `#e43d2b`
  } else if (23 <= curtemp && curtemp <= 27) {
    clothTag = ['반팔', '얇은 셔츠', '반바지', '면바지']
    clothText = `더운 날씨예요. 실내에 오래 있다면 외투를 챙기도록 해요. 에어컨이 추울 수 있어요.`
    boxColor = `#e9602c`
  } else if (20 <= curtemp && curtemp <= 22) {
    clothTag = ['블라우스', '긴팔 티', '면바지', '슬랙스']
    clothText = `따뜻하기도 시원하기도 한 날씨예요. 일교차에 주의해야 겠어요.`
    boxColor = `#ee8d1c`
  } else if (17 <= curtemp && curtemp <= 19) {
    clothTag = ['맨투맨', '후드', '슬랙스', '청바지']
    clothText = `선선하고 좋은 날씨예요. 밤에는 추울 수도 있으니 외투를 챙기도록 해요.`
    boxColor = `#cfac2d`
  } else if (12 <= curtemp && curtemp <= 16) {
    clothTag = ['자켓', '가디건', '니트', '청바지']
    clothText = `조금 쌀쌀할 수 있어요. 멋도 좋지만 따스한 외투를 하나씩 챙겨요.`
    boxColor = `#b7ae32`
  } else if (9 <= curtemp && curtemp <= 11) {
    clothTag = ['코트', '야상', '점퍼', '목티']
    clothText = `쌀쌀한 날씨예요. 센치한 멋을 부릴 수 있는 날씨!`
    boxColor = `#8bae5b`
  } else if (5 <= curtemp && curtemp <= 8) {
    clothTag = ['두꺼운 코트', '히트텍', '기모', '플리스']
    clothText = `조금 추운 날씨예요. 내의를 챙겨 입고 따뜻하게 다녀요.`
    boxColor = `#4998b6`
  } else if (4 >= curtemp) {
    clothTag = ['패딩', '두꺼운 코트', '기모', '목도리', '장갑']
    clothText = `날씨가 아주 추워요. 꽁꽁 싸매고 둘러야 해요. 두툼하게 입도록 해요.`
    boxColor = `#2d82c3`
  }
  return {
    clothTag,
    clothText,
    boxColor,
  }
}
