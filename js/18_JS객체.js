// JS 객체
// - {K:V, K:V, K:V...}
// - (중요!) Key는 무조건 문자열(string)
//    -> "Key", 'key', key (따옴표를 작성하지 않아도 JavaScript는 String으로 인식한다!)
// - Key는 기본적으로 오름차순으로 정렬된다. (short, ASC)
// ??? 그럼 value는 사용자가 입력한 값에 따라 다른가 ???

// {} 객체 생성 + 다루기
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // const product = {};  <- 비어있는 객체 생성
  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "Samsung",
    price: 200000,
  };
  console.log(제품);

  // 2. 객체 내 key 값을 이용해서 원하는 value 값을 가져오기
  // 2-1. 객체명.key
  console.log(제품.productName, 제품.productBrand, 제품.price);
  // 2-2. 객체명["key"]  
  console.log(제품["productName"], 제품["productBrand"], 제품["price"]);
  // 아래보단 위 방식을 많이 사용한다!
  // 역할은 동일하지만 위 방식에 비해서 아래 방식은 많이 사용하지 않는다!

  // 3.객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌 [] 리스트 목록 형태도 가능하다.
  제품.color = ["black", "red", "green"];
  제품.storage = ["256GB", "512GB", "1TB"]
  // 3-1. 객체명.key = value;
  // 3-2. 객체명["key"] = value;
  console.log(제품);
  console.log(제품.color[1]);
  제품.price = 180000;
  console.log(제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // delete 객체명.key
  delete 제품.productName;  // productName 삭제
  console.log("delete 이후 제품 : ", 제품);

  
});

// 함수 내 메소드 존재
// 함수 기능은 단독 사용 가능하지만 메소드 기능은 단독 사용 불가
//                          -> 객체와 함께 사용해야 함


// ----------------------------------------------
// method(메소드)

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  const 스마트폰 = {};   // <- 비어있는 객체 생성
  스마트폰.모델명 = "아이폰16프로맥스";
  스마트폰.가격 = 1000000;

  // 메소드 (객체의 기능(함수)) 추가
  스마트폰.정보 = function(){
    const 브랜드 = "사과";
    // this 참조 변수
    // - 작성되는 위치에 따라서 의미가 다르다.
    // ex) <button onclick="테스트기능(this)">
    //     -> 이때 this는 클릭된 요소(=버튼)
    // ex) 객체명.메소드명 = function(){this.변수명="값";}
    //     -> 이때 this는 메소드가 작성된 객체
    colsole.log("모델명 : ", this.모델명);
    colsole.log("모델명 : ", 모델명);
    colsole.log("가격 : ", this.가격);
    colsole.log("가격 : ", 가격);
    colsole.log("브랜드 : ", this.브랜드);
    colsole.log("브랜드 : ", 브랜드);
  }
})