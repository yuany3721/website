import {
    bjs,
    shs,
    tjs,
    cqs,
    jss,
    zjs,
    hns,
    ahs,
    gss,
    gx,
    gzs,
    fjs,
    hbs,
    sxs,
    xj,
    xz,
    yns,
    jls,
    jxs,
    hljs,
    scs,
    gds,
    lns,
    hubei,
    nmg,
    nx,
    hunan,
    qhs,
    sds,
    sx,
    hainan,
  } from './City';
  
  export const getFirstName = (car: string[]): string[] => {
    const tag = car[0] || '';
    switch (tag) {
      case '京':
        return ['北京市', ...bjs(car)];
      case '津':
        return ['天津市', ...tjs(car)];
      case '沪':
        return ['上海市', ...shs(car)];
      case '渝':
        return ['重庆市', ...cqs(car)];
      case '苏':
        return ['江苏省', ...jss(car)];
      case '浙':
        return ['浙江省', ...zjs(car)];
      case '豫':
        return ['河南省', ...hns(car)];
      case '粤':
        return ['广东省', ...gds(car)];
      case '川':
        return ['四川省', ...scs(car)];
      case '陕':
        return ['陕西省', ...sx(car)];
      case '冀':
        return ['河北省', ...hbs(car)];
      case '辽':
        return ['辽宁省', ...lns(car)];
      case '吉':
        return ['吉林省', ...jls(car)];
      case '皖':
        return ['安徽省', ...ahs(car)];
      case '闽':
        return ['福建省', ...fjs(car)];
      case '鄂':
        return ['湖北省', ...hubei(car)];
      case '湘':
        return ['湖南省', ...hunan(car)];
      case '鲁':
        return ['山东省', ...sds(car)];
      case '晋':
        return ['山西省', ...sxs(car)];
      case '黑':
        return ['黑龙江省', ...hljs(car)];
      case '赣':
        return ['江西省', ...jxs(car)];
      case '贵':
        return ['贵州省', ...gzs(car)];
      case '甘':
        return ['甘肃省', ...gss(car)];
      case '桂':
        return ['广西壮族自治区', ...gx(car)];
      case '琼':
        return ['海南省', ...hainan(car)];
      case '云':
        return ['云南省', ...yns(car)];
      case '青':
        return ['青海省', ...qhs(car)];
      case '蒙':
        return ['内蒙古自治区', ...nmg(car)];
      case '藏':
        return ['西藏自治区', ...xz(car)];
      case '宁':
        return ['宁夏回族自治区', ...nx(car)];
      case '新':
        return ['新疆维吾尔自治区', ...xj(car)];
    }
    return [''];
  };