/**
 * 北京市
 * @param car
 */
export const bjs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['外国人或外籍公司拥有的车辆或为中央国家机关使用'];
    case 'B':
      return ['出租车、摩托车及营运车辆'];
    case 'C':
      return ['市区号牌'];
    case 'D':
      return ['警车号牌'];
    case 'E':
      return ['市区号牌'];
    case 'F':
      return ['市区号牌'];
    case 'G':
      return ['远郊区县'];
    case 'H':
      return ['市区号牌'];
    case 'J':
      return ['市区号牌'];
    case 'K':
      return ['市区号牌'];
    case 'L':
      return ['市区号牌'];
    case 'M':
      return ['市区号牌'];
    case 'N':
      return ['市区和郊区号牌'];
    case 'O':
      return ['中央国家机关使用'];
    case 'P':
      return ['市区和郊区号牌'];
    case 'Q':
      return ['市区号牌'];
    case 'V':
      return ['北京卫戍区'];
    case 'Y':
      return ['市区和郊区号牌'];
  }
  return [''];
};

/**
 * 上海市
 * @param car
 */
export const shs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return [''];
    case 'B':
      return [''];
    case 'C':
      return ['郊区'];
    case 'D':
      return [''];
    case 'E':
      return [''];
    case 'F':
      return [''];
    case 'G':
      return [''];
    case 'H':
      return [''];
    case 'J':
      return [''];
    case 'K':
      return [''];
    case 'L':
      return [''];
    case 'M':
      return [''];
    case 'N':
      return [''];
    case 'R':
      return ['崇明、长兴、横沙'];
  }
  return [''];
};
/**
 * 天津市
 * @param car
 */
export const tjs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return [''];
    case 'B':
      return [''];
    case 'C':
      return [''];
    case 'D':
      return [''];
    case 'E':
      return ['出租车'];
    case 'F':
      return [''];
    case 'G':
      return [''];
    case 'H':
      return [''];
    case 'K':
      return ['警备区'];
    case 'O':
      return ['公安局'];
  }
  return [''];
};
/**
 * 重庆市
 * @param car
 */
export const cqs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['直属车辆管理所'];
    case 'B':
      return ['江南车辆管理分所'];
    case 'C':
      return ['永川车辆管理所：永川市、江津市、合川市、潼南县、铜梁县、壁山县、大足县、綦江县、荣昌县'];
    case 'F':
      return ['万州车辆管理所：万州区、梁平县、城口县、巫山县、巫溪县、忠县、开县、奉节县、云阳县'];
    case 'G':
      return ['涪陵车辆管理所：涪陵区、南川市、垫江县、丰都县、武隆县'];
    case 'H':
      return ['黔江车辆管理所：黔江区、石柱土家族自治县、秀山土家族苗族自治县、酉阳土家族苗族自治县、彭水苗族土家族自治县'];
  }
  return [''];
};
/**
 * 河北省
 * @param car
 */
export const hbs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['石家庄市'];
    case 'B':
      return ['唐山市'];
    case 'C':
      return ['秦皇岛市'];
    case 'D':
      return ['邯郸市'];
    case 'E':
      return ['邢台市'];
    case 'F':
      return ['保定市'];
    case 'G':
      return ['张家口市'];
    case 'H':
      return ['承德市'];
    case 'J':
      return ['沧州市'];
    case 'R':
      return ['廊坊市'];
    case 'T':
      return ['衡水市'];
  }
  return [''];
};

/**
 * 山西省
 * @param car
 */
export const sxs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['太原市'];
    case 'B':
      return ['大同市'];
    case 'C':
      return ['阳泉市'];
    case 'D':
      return ['长治市'];
    case 'E':
      return ['晋城市'];
    case 'F':
      return ['朔州市'];
    case 'H':
      return ['忻州市'];
    case 'j':
      return ['吕梁地区'];
    case 'K':
      return ['晋中市'];
    case 'L':
      return ['临汾市'];
    case 'M':
      return ['运城市'];
  }
  return [''];
};

/**
 * 内蒙古
 * @param car
 */
export const nmg = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['呼和浩特市'];
    case 'B':
      return ['包头市'];
    case 'C':
      return ['乌海市'];
    case 'D':
      return ['赤峰市'];
    case 'E':
      return ['呼伦贝尔市'];
    case 'F':
      return ['兴安盟'];
    case 'G':
      return ['通辽市'];
    case 'H':
      return ['锡林郭勒盟'];
    case 'J':
      return ['乌兰察布盟'];
    case 'K':
      return ['鄂尔多斯市'];
    case 'L':
      return ['巴彦淖尔盟'];
    case 'M':
      return ['阿拉善盟'];
  }
  return [''];
};

/**
 * 辽宁省
 * @param car
 */
export const lns = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['沈阳市'];
    case 'B':
      return ['大连市'];
    case 'C':
      return ['鞍山市'];
    case 'D':
      return ['抚顺市'];
    case 'E':
      return ['本溪市'];
    case 'F':
      return ['丹东市'];
    case 'G':
      return ['锦州市'];
    case 'H':
      return ['营口市'];
    case 'J':
      return ['阜新市'];
    case 'K':
      return ['辽阳市'];
    case 'L':
      return ['盘锦市'];
    case 'M':
      return ['铁岭市'];
    case 'N':
      return ['朝阳市'];
    case 'P':
      return ['葫芦岛市'];
    case 'V':
      return ['省直机关'];
  }
  return [''];
};

/**
 * 吉林
 * @param car
 */
export const jls = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['长春市'];
    case 'B':
      return ['吉林市'];
    case 'C':
      return ['四平市'];
    case 'D':
      return ['辽源市'];
    case 'E':
      return ['通化市'];
    case 'F':
      return ['白山市'];
    case 'G':
      return ['白城市'];
    case 'H':
      return ['延边朝鲜族自治州'];
    case 'J':
      return ['松原市'];
  }
  return [''];
};

/**
 * 黑龙江省
 * @param car
 */
export const hljs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['哈尔滨市'];
    case 'B':
      return ['齐齐哈尔市'];
    case 'C':
      return ['牡丹江市'];
    case 'D':
      return ['佳木斯市'];
    case 'E':
      return ['大庆市'];
    case 'F':
      return ['伊春市'];
    case 'G':
      return ['鸡西市'];
    case 'H':
      return ['鹤岗市'];
    case 'J':
      return ['双鸭山市'];
    case 'K':
      return ['七台河市'];
    case 'L':
      return ['松花江地区(已并入哈尔滨市，车牌未改)'];
    case 'M':
      return ['绥化市'];
    case 'N':
      return ['黑河市'];
    case 'P':
      return ['大兴安岭地区'];
    case 'R':
      return ['农垦系统'];
  }
  return [''];
};
/**
 * 江苏省
 * @param car
 */
export const jss = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['南京市'];
    case 'B':
      return ['无锡市'];
    case 'C':
      return ['徐州市'];
    case 'D':
      return ['常州市'];
    case 'E':
      return ['苏州市'];
    case 'F':
      return ['南通市'];
    case 'G':
      return ['连云港市'];
    case 'H':
      return ['淮安市'];
    case 'J':
      return ['盐城市'];
    case 'K':
      return ['扬州市'];
    case 'L':
      return ['镇江市'];
    case 'M':
      return ['泰州市'];
    case 'N':
      return ['宿迁市'];
  }
  return [''];
};

/**
 * 浙江省
 * @param car
 */
export const zjs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['杭州市'];
    case 'B':
      return ['宁波市'];
    case 'C':
      return ['温州市'];
    case 'D':
      return ['绍兴市'];
    case 'E':
      return ['湖州市'];
    case 'F':
      return ['嘉兴市'];
    case 'G':
      return ['金华市'];
    case 'H':
      return ['衢州市'];
    case 'J':
      return ['台州市'];
    case 'K':
      return ['丽水市'];
    case 'L':
      return ['舟山市'];
  }
  return [''];
};

/**
 * 安徽省
 * @param car
 */
export const ahs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['合肥市'];
    case 'B':
      return ['芜湖市'];
    case 'C':
      return ['蚌埠市'];
    case 'D':
      return ['淮南市'];
    case 'E':
      return ['马鞍山市'];
    case 'F':
      return ['淮北市'];
    case 'G':
      return ['铜陵市'];
    case 'H':
      return ['安庆市'];
    case 'J':
      return ['黄山市'];
    case 'K':
      return ['阜阳市'];
    case 'L':
      return ['宿州市'];
    case 'M':
      return ['滁州市'];
    case 'N':
      return ['六安市'];
    case 'P':
      return ['宣城市'];
    case 'Q':
      return ['巢湖市'];
    case 'R':
      return ['池州市'];
    case 'S':
      return ['亳州市'];
  }
  return [''];
};
/**
 * 福建省
 * @param car
 */
export const fjs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['福州市'];
    case 'B':
      return ['莆田市'];
    case 'C':
      return ['泉州市'];
    case 'D':
      return ['厦门市'];
    case 'E':
      return ['漳州市'];
    case 'F':
      return ['龙岩市'];
    case 'G':
      return ['三明市'];
    case 'H':
      return ['南平市'];
    case 'J':
      return ['宁德市'];
    case 'K':
      return ['省直系统'];
  }
  return [''];
};

/**
 * 江西省
 * @param car
 */
export const jxs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['南昌市'];
    case 'B':
      return ['赣州市'];
    case 'C':
      return ['宜春市'];
    case 'D':
      return ['吉安市'];
    case 'E':
      return ['上饶市'];
    case 'F':
      return ['抚州市'];
    case 'G':
      return ['九江市'];
    case 'H':
      return ['景德镇市'];
    case 'J':
      return ['萍乡市'];
    case 'K':
      return ['新余市'];
    case 'L':
      return ['鹰潭市'];
    case 'M':
      return ['省直系统'];
  }
  return [''];
};

/**
 * 山东省
 * @param car
 */
export const sds = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['济南市'];
    case 'B':
      return ['青岛市'];
    case 'C':
      return ['淄博市'];
    case 'D':
      return ['枣庄市'];
    case 'E':
      return ['东营市'];
    case 'F':
      return ['烟台市'];
    case 'G':
      return ['潍坊市'];
    case 'H':
      return ['济宁市'];
    case 'J':
      return ['泰安市'];
    case 'K':
      return ['威海市'];
    case 'L':
      return ['日照市'];
    case 'M':
      return ['滨州市'];
    case 'N':
      return ['德州市'];
    case 'P':
      return ['聊城市'];
    case 'Q':
      return ['临沂市'];
    case 'R':
      return ['菏泽市'];
    case 'S':
      return ['莱芜市'];
    case 'U':
      return ['青岛市增补'];
    case 'V':
      return ['潍坊市增补'];
  }
  return [''];
};

/**
 * 河南省
 * @param car
 */
export const hns = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['郑州市'];
    case 'B':
      return ['开封市'];
    case 'C':
      return ['洛阳市'];
    case 'D':
      return ['平顶山市'];
    case 'E':
      return ['安阳市'];
    case 'F':
      return ['鹤壁市'];
    case 'G':
      return ['新乡市'];
    case 'H':
      return ['焦作市'];
    case 'J':
      return ['濮阳市'];
    case 'K':
      return ['许昌市'];
    case 'L':
      return ['漯河市'];
    case 'M':
      return ['三门峡市'];
    case 'N':
      return ['商丘市'];
    case 'P':
      return ['周口市'];
    case 'Q':
      return ['驻马店市'];
    case 'R':
      return ['南阳市'];
    case 'S':
      return ['信阳市'];
    case 'U':
      return ['济源市'];
  }
  return [''];
};

/**
 * 湖北省
 * @param car
 */
export const hubei = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['武汉市'];
    case 'B':
      return ['黄石市'];
    case 'C':
      return ['十堰市'];
    case 'D':
      let t2 = car[2] || '';
      switch (t2) {
        case '0':
        case '8':
        case 'A':
          t2 = '沙市区';
          break;
        case '1':
        case 'B':
          t2 = '荆州区';
          break;
        case '2':
          t2 = '江陵县';
          break;
        case '3':
          t2 = '松滋市';
          break;
        case '4':
          t2 = '公安县';
          break;
        case '5':
          t2 = '石首市';
          break;
        case '6':
          t2 = '监利市';
          break;
        case '7':
          t2 = '洪湖市';
          break;
        default:
          t2 = '';
      }
      return ['荆州市', t2];
    case 'E':
      return ['宜昌市'];
    case 'F':
      return ['襄樊市'];
    case 'G':
      return ['鄂州市'];
    case 'H':
      return ['荆门市'];
    case 'J':
      return ['黄冈市'];
    case 'K':
      return ['孝感市'];
    case 'L':
      return ['咸宁市'];
    case 'M':
      return ['仙桃市'];
    case 'N':
      return ['潜江市'];
    case 'P':
      return ['神农架林区'];
    case 'Q':
      return ['恩施土家族苗族自治州'];
    case 'R':
      return ['天门市'];
    case 'S':
      return ['随州市'];
  }
  return [''];
};

/**
 * 湖南省
 * @param car
 */
export const hunan = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['长沙市'];
    case 'B':
      return ['株洲市'];
    case 'C':
      return ['湘潭市'];
    case 'D':
      return ['衡阳市'];
    case 'E':
      return ['邵阳市'];
    case 'F':
      return ['岳阳市'];
    case 'G':
      return ['张家界市'];
    case 'H':
      return ['益阳市'];
    case 'J':
      return ['常德市'];
    case 'K':
      return ['娄底市'];
    case 'L':
      return ['郴州市'];
    case 'M':
      return ['永州市'];
    case 'N':
      return ['怀化市'];
    case 'U':
      return ['湘西土家族苗族自治州'];
  }
  return [''];
};

/**
 * 广东省
 * @param car
 */
export const gds = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['广州市'];
    case 'B':
      return ['深圳市'];
    case 'C':
      return ['珠海市'];
    case 'D':
      return ['汕头市'];
    case 'E':
      return ['佛山市'];
    case 'F':
      return ['韶关市'];
    case 'G':
      return ['湛江市'];
    case 'H':
      return ['肇庆市'];
    case 'J':
      return ['江门市'];
    case 'K':
      return ['茂名市'];
    case 'L':
      return ['惠州市'];
    case 'M':
      return ['梅州市'];
    case 'N':
      return ['汕尾市'];
    case 'P':
      return ['河源市'];
    case 'Q':
      return ['阳江市'];
    case 'R':
      return ['清远市'];
    case 'S':
      return ['东莞市'];
    case 'T':
      return ['中山市'];
    case 'U':
      return ['潮州市'];
    case 'V':
      return ['揭阳市'];
    case 'W':
      return ['云浮市'];
    case 'X':
      return ['顺德区'];
    case 'Y':
      return ['南海区'];
    case 'Z':
      return ['香港澳门进入内地车辆'];
  }
  return [''];
};
/**
 * 广西省
 * @param car
 */
export const gx = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['南宁市'];
    case 'B':
      return ['柳州市'];
    case 'C':
      return ['桂林市'];
    case 'D':
      return ['梧州市'];
    case 'E':
      return ['北海市'];
    case 'F':
      return ['南宁地区(部分划入南宁市，其它部分成立崇左市)'];
    case 'G':
      return ['柳州地区(部分划入柳州市，其它部分成立来宾市)'];
    case 'H':
      return ['桂林地区(已并入桂林市)'];
    case 'J':
      return ['贺州市'];
    case 'K':
      return ['玉林市'];
    case 'L':
      return ['百色市'];
    case 'M':
      return ['河池市'];
    case 'N':
      return ['钦州市'];
    case 'P':
      return ['防城港市'];
    case 'R':
      return ['贵港市'];
  }
  return [''];
};

/**
 * 海南省
 * @param car
 */
export const hainan = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['海口市'];
    case 'B':
      return ['三亚市'];
    case 'C':
      return ['琼北车辆管理所：琼山市（已并入海口市）、儋州市、琼海市、万宁市、文昌市、澄迈县、屯昌县、定安县、临高县'];
    case 'D':
      return ['琼南车辆管理所：五指山市、东方市、白沙黎族自治县、昌江黎族自治县、陵水黎族自治县、乐东黎族自治县、保亭黎族苗族自治县、琼中黎族苗族自治县'];
    case 'E':
      return ['洋浦开发区'];
  }
  return [''];
};

/**
 * 四川省
 * @param car
 */
export const scs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['成都市'];
    case 'B':
      return ['绵阳市'];
    case 'C':
      return ['自贡市'];
    case 'D':
      return ['攀枝花市'];
    case 'E':
      return ['泸州市'];
    case 'F':
      return ['德阳市'];
    case 'H':
      return ['广元市'];
    case 'J':
      return ['遂宁市'];
    case 'K':
      return ['内江市'];
    case 'L':
      return ['乐山市'];
    case 'M':
      return ['资阳市'];
    case 'Q':
      return ['宜宾市'];
    case 'R':
      return ['南充市'];
    case 'S':
      return ['达州市'];
    case 'T':
      return ['雅安市'];
    case 'U':
      return ['阿坝藏族羌族自治州'];
    case 'V':
      return ['甘孜藏族自治州'];
    case 'W':
      return ['凉山彝族自治州'];
    case 'X':
      return ['广安市'];
    case 'Y':
      return ['巴中市'];
    case 'Z':
      return ['眉山市'];
  }
  return [''];
};
/**
 * 贵州省
 * @param car
 */
export const gzs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['贵阳市'];
    case 'B':
      return ['六盘水市'];
    case 'C':
      return ['遵义市'];
    case 'D':
      return ['铜仁地区'];
    case 'E':
      return ['黔西南布依族苗族自治州'];
    case 'F':
      return ['毕节地区'];
    case 'G':
      return ['安顺市'];
    case 'H':
      return ['黔东南苗族侗族自治州'];
    case 'J':
      return ['黔南布依族苗族自治州'];
  }
  return [''];
};
/**
 * 云南省
 * @param car
 */
export const yns = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['昆明市'];
    case 'B':
      return ['原来云B是东川，后来划归昆明'];
    case 'C':
      return ['昭通市'];
    case 'D':
      return ['曲靖市'];
    case 'E':
      return ['楚雄彝族自治州'];
    case 'F':
      return ['玉溪市'];
    case 'G':
      return ['红河哈尼族彝族自治州'];
    case 'H':
      return ['文山壮族苗族自治州'];
    case 'J':
      return ['普洱市(原思茅市)'];
    case 'K':
      return ['西双版纳傣族自治州'];
    case 'L':
      return ['大理白族自治州'];
    case 'M':
      return ['保山市'];
    case 'N':
      return ['德宏傣族景颇族自治州'];
    case 'P':
      return ['丽江市'];
    case 'Q':
      return ['怒江傈僳族自治州'];
    case 'R':
      return ['迪庆藏族自治州'];
    case 'S':
      return ['临沧地区'];
  }
  return [''];
};
/**
 * 西藏
 * @param car
 */
export const xz = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['拉萨市'];
    case 'B':
      return ['昌都地区'];
    case 'C':
      return ['山南地区'];
    case 'D':
      return ['日喀则地区'];
    case 'E':
      return ['那曲地区'];
    case 'F':
      return ['阿里地区'];
    case 'G':
      return ['林芝地区'];
    case 'H':
      return ['驻四川省天全县车辆管理所'];
    case 'J':
      return ['驻青海省格尔木市车辆管理所'];
  }
  return [''];
};
/**
 * 陕西省
 * @param car
 */
export const sx = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['西安市'];
    case 'B':
      return ['铜川市'];
    case 'C':
      return ['宝鸡市'];
    case 'D':
      return ['咸阳市'];
    case 'E':
      return ['渭南市'];
    case 'F':
      return ['汉中市'];
    case 'G':
      return ['安康市'];
    case 'H':
      return ['商洛市'];
    case 'J':
      return ['延安市'];
    case 'K':
      return ['榆林市'];
    case 'U':
      return ['省直系统(已取消)'];
    case 'V':
      return ['杨凌高新农业示范区'];
  }
  return [''];
};
/**
 * 甘肃省
 * @param car
 */
export const gss = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['兰州市'];
    case 'B':
      return ['嘉峪关市'];
    case 'C':
      return ['金昌市'];
    case 'D':
      return ['白银市'];
    case 'E':
      return ['天水市'];
    case 'F':
      return ['酒泉市'];
    case 'G':
      return ['张掖市'];
    case 'H':
      return ['武威市'];
    case 'J':
      return ['定西地区'];
    case 'K':
      return ['陇南地区'];
    case 'L':
      return ['平凉市'];
    case 'M':
      return ['庆阳市'];
    case 'N':
      return ['临夏回族自治州'];
    case 'P':
      return ['甘南藏族自治州'];
  }
  return [''];
};
/**
 * 青海省
 * @param car
 */
export const qhs = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['西宁市'];
    case 'B':
      return ['海东地区'];
    case 'C':
      return ['海北藏族自治州'];
    case 'D':
      return ['黄南藏族自治州'];
    case 'E':
      return ['海南藏族自治州'];
    case 'F':
      return ['果洛藏族自治州'];
    case 'G':
      return ['玉树藏族自治州'];
    case 'H':
      return ['海西蒙古族藏族自治州'];
  }
  return [''];
};
/**
 * 宁夏
 * @param car
 */
export const nx = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['银川市'];
    case 'B':
      return ['石嘴山市'];
    case 'C':
      return ['吴忠市'];
    case 'D':
      return ['固原市'];
  }
  return [''];
};
/**
 * 新疆
 * @param car
 */
export const xj = (car: string[]): string[] => {
  const tag = car[1] || '';
  switch (tag) {
    case 'A':
      return ['乌鲁木齐市'];
    case 'B':
      return ['昌吉回族自治州'];
    case 'C':
      return ['石河子市'];
    case 'D':
      return ['奎屯市'];
    case 'E':
      return ['博尔塔拉蒙古自治州'];
    case 'F':
      return ['伊犁哈萨克自治州直辖县、县级市(原伊宁地区)'];
    case 'G':
      return ['塔城地区'];
    case 'H':
      return ['阿勒泰地区'];
    case 'J':
      return ['克拉玛依市'];
    case 'K':
      return ['吐鲁番地区'];
    case 'L':
      return ['哈密地区'];
    case 'M':
      return ['巴音郭楞蒙古自治州'];
    case 'N':
      return ['阿克苏地区'];
    case 'P':
      return ['克孜勒苏柯尔克孜自治州'];
    case 'Q':
      return ['喀什地区'];
    case 'R':
      return ['和田地区'];
  }
  return [''];
};