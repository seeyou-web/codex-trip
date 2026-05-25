const spots = [
  {
    id: 1,
    name: '故宫博物院',
    category: '历史文化',
    cover: '宫墙金瓦与中轴线景观',
    tags: ['必打卡', '皇家建筑'],
    desc: '中国明清两代皇家宫殿，北京旅行中最具代表性的历史地标。',
    openTime: '08:30-17:00',
    ticket: '60元起',
    duration: '3-4小时',
    season: '春秋最佳',
    traffic: '地铁1号线天安门东站，步行可达午门。',
    tips: ['建议提前预约门票', '建议上午入场', '节假日排队时间较长'],
    detail:
      '故宫建筑群体量宏大，适合沿中轴线依次参观太和殿、中和殿、保和殿，再进入后宫区域。适合第一次来北京的游客了解城市历史。'
  },
  {
    id: 2,
    name: '天安门广场',
    category: '历史文化',
    cover: '广场中轴线与城市开阔景观',
    tags: ['城市地标', '升旗仪式'],
    desc: '北京最具象征意义的公共空间，适合串联故宫一线游览。',
    openTime: '全天开放',
    ticket: '免费',
    duration: '1-2小时',
    season: '四季皆宜',
    traffic: '地铁1号线天安门东站或天安门西站。',
    tips: ['安检较严格', '清晨适合看升旗', '避开大型节假日高峰'],
    detail:
      '天安门广场是北京中轴线上的重要节点，空间开阔，适合安排在故宫或国家博物馆行程之前，方便集中打卡核心地标。'
  },
  {
    id: 3,
    name: '八达岭长城',
    category: '历史文化',
    cover: '山脊长城与城楼景观',
    tags: ['经典长城', '远郊出游'],
    desc: '知名度最高的长城段之一，交通相对成熟，适合首次体验长城。',
    openTime: '06:30-16:30',
    ticket: '40元起',
    duration: '4-6小时',
    season: '春秋最佳',
    traffic: '可乘高铁或旅游专线前往，建议预留往返时间。',
    tips: ['穿舒适运动鞋', '旺季尽量早到', '注意台阶较陡'],
    detail:
      '八达岭长城地势起伏明显，视野开阔，是体验“不到长城非好汉”的经典选择。由于路程较远，更适合独立安排半天到一天行程。'
  },
  {
    id: 4,
    name: '颐和园',
    category: '皇家园林',
    cover: '昆明湖与长廊园林景观',
    tags: ['园林漫步', '拍照出片'],
    desc: '北京皇家园林代表，适合轻松散步和欣赏湖景建筑。',
    openTime: '06:00-19:00',
    ticket: '30元起',
    duration: '3-5小时',
    season: '春夏秋最佳',
    traffic: '地铁4号线北宫门站或西苑站。',
    tips: ['路线较大建议穿舒适鞋', '长廊和十七孔桥适合拍照', '夏季注意防晒'],
    detail:
      '颐和园以昆明湖和万寿山为核心，园区层次丰富，适合慢节奏游览。既能看皇家园林布局，也适合休闲型游客安排半天行程。'
  },
  {
    id: 5,
    name: '天坛公园',
    category: '历史文化',
    cover: '祈年殿蓝瓦金顶建筑景观',
    tags: ['古建经典', '中轴文化'],
    desc: '明清皇帝祭天场所，祈年殿是北京代表性古建筑之一。',
    openTime: '06:00-21:00',
    ticket: '15元起',
    duration: '2-3小时',
    season: '春秋最佳',
    traffic: '地铁5号线天坛东门站。',
    tips: ['可搭配前门区域游览', '上午光线更适合拍照', '注意分清公园票和联票'],
    detail:
      '天坛以庄重的礼制建筑和广阔的古树园林见长，既适合建筑爱好者，也适合希望轻松游览北京核心景点的游客。'
  },
  {
    id: 6,
    name: '南锣鼓巷',
    category: '亲子休闲',
    cover: '胡同街巷与文创店铺景观',
    tags: ['胡同体验', '美食散步'],
    desc: '适合体验北京胡同氛围，边走边逛，感受慢节奏街区。',
    openTime: '全天开放',
    ticket: '免费',
    duration: '2小时',
    season: '四季皆宜',
    traffic: '地铁6号线或8号线南锣鼓巷站。',
    tips: ['傍晚氛围更好', '周末较拥挤', '可串联什刹海一起游玩'],
    detail:
      '南锣鼓巷保留了北京胡同的街巷肌理，同时聚集了餐饮和文创小店，适合安排在一天行程的后半段，作为轻松收尾。'
  },
  {
    id: 7,
    name: '鸟巢',
    category: '现代地标',
    cover: '国家体育场钢结构外观',
    tags: ['奥运地标', '现代建筑'],
    desc: '北京现代城市地标，夜景表现尤其突出。',
    openTime: '10:00-22:00',
    ticket: '50元起',
    duration: '1-2小时',
    season: '四季皆宜',
    traffic: '地铁8号线奥体中心站或奥林匹克公园站。',
    tips: ['夜景更值得看', '可与水立方一起安排', '广场区域风较大'],
    detail:
      '鸟巢展示了北京现代都市的一面，建筑识别度很高。适合希望在传统景点之外补充现代城市风貌的游客。'
  },
  {
    id: 8,
    name: '什刹海',
    category: '亲子休闲',
    cover: '湖岸步道与老北京街区景观',
    tags: ['湖边漫步', '夜游推荐'],
    desc: '湖景、胡同与酒吧街共存，适合傍晚和夜间散步。',
    openTime: '全天开放',
    ticket: '免费',
    duration: '2-3小时',
    season: '春夏秋最佳',
    traffic: '地铁8号线什刹海站。',
    tips: ['适合傍晚前往', '可结合南锣鼓巷', '冬季风较冷注意保暖'],
    detail:
      '什刹海是北京兼具水岸景观与胡同生活感的区域，适合慢慢走、慢慢看，更偏向休闲体验型行程。'
  }
]

const hotSpots = spots.slice(0, 6).map((spot, index) => ({
  id: spot.id,
  name: spot.name,
  cover: spot.cover,
  tag: index < 3 ? '热门推荐' : '初次来京',
  shortDesc: spot.desc
}))

const routes = [
  {
    id: 1,
    title: '北京经典一日游',
    days: 1,
    fit: '首次来北京用户',
    route: ['天安门广场', '故宫博物院', '天坛公园', '南锣鼓巷'],
    desc: '核心地标集中，文化体验完整，适合第一次来北京打卡。'
  },
  {
    id: 2,
    title: '北京皇家园林一日游',
    days: 1,
    fit: '喜欢轻松游览和拍照的游客',
    route: ['颐和园', '鸟巢', '什刹海'],
    desc: '从皇家园林到现代地标，再以湖边慢游收尾，节奏相对舒缓。'
  },
  {
    id: 3,
    title: '北京两日深度游',
    days: 2,
    fit: '时间较充裕的游客',
    route: ['天安门广场', '故宫博物院', '南锣鼓巷', '八达岭长城', '颐和园'],
    desc: '第一天聚焦中轴线，第二天安排长城和园林，更适合完整体验北京。'
  }
]

function simulate(data) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(JSON.parse(JSON.stringify(data)))
    }, 320)
  })
}

export function getSpots() {
  return simulate(spots)
}

export function getSpotById(id) {
  const spot = spots.find((item) => item.id === Number(id))

  if (!spot) {
    return new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error('景点不存在')), 320)
    })
  }

  return simulate(spot)
}

export function getHotSpots() {
  return simulate(hotSpots)
}

export function getRoutes() {
  return simulate(routes)
}
