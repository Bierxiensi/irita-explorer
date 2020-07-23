export const ExplorerCN = {
	common:{
		allTxStatus:'所有交易状态',
		success:'Success',
		failed:'Failed',
		allTxType:'所有交易类型',
	},
    element:{
	    table:{
            emptyDescription:'- 暂时没有内容 -'
        },
        date:{
	        select:'选择日期'
        }

    },
	message:{
		txListFailed:'获取交易列表失败,请稍后重试',
		txTypeFailed:'获取交易类型失败,请稍后重试',
		serviceInfoFailed:'获取service信息错误,请稍后重试',
		serviceBindFailed:'获取service绑定交易列表错误,请稍后重试',
		serviceListFailed:'获取service交易列表错误,请稍后重试',
		serviceTxListFailed:'获取服务交易列表失败,请稍后重试',
		txInfoFailed:'获取交易信息失败,请稍后重试',
		callServiceListFailed:'获取消费者服务调用列表失败,请稍后重试',
		respondRecordFailed:'获取响应记录失败,请稍后重试',
		providerServiceListFailed:'获取提供者服务调用列表失败,请稍后重试'
	},
	Navigation:{
		block: '区块浏览',
		transactions: '交易浏览',
		validators: '共识节点',
		nftAsset: 'NFT 资产',
		service: '服务浏览',
		searchPlaceHolder: '请输入地址/交易哈希/区块高度进行搜索'
	},
	home:{
		blockHeight: '最新区块',
		transactions: '交易数量',
		avgBlockTime: '平均出块时间',
		last100Blocs: '最近100块',
		validators: '共识节点数',
		services: '服务数量',
		assets: '资产数量',
		blocks: '最近区块',
		viewAll: '查看全部',
		listTransactions: '最近交易',
	},
	block:{
		currentHeight: '当前区块',
		block: '区块高度',
		transactions: '交易数量',
		timestamp: '参考时间',
		age: '参考块龄'
	},
	blockDetail:{
		blockHash: '区块摘要:',
		transaction: '交易数量:',
		timestamp: '参考时间:',
		transactions: '区块交易',
	},
	transactions:{
		txs: '交易',
		search: '搜索',
		txHash: '交易哈希',
		block: '区块高度',
		txType: '交易类型',
		from: '发送方',
		to: '接收方',
		signer: '签名方',
		status: '交易状态',
		timestamp: '交易时间',
		requestId: '请求标识',
		type: '交易类型',
	},
	validators:{
		name: '名称',
		operator: '操作地址',
		votingPower: '权重',
		pubKey: '公钥'
	},
	nftAsset:{
		assets: 'NFT 资产',
		search: '搜索',
		denom: '报表类别',
		owner: '拥有者',
		id: '报表标识',
		data: '链上数据',
		uri: '链外链接',
		placeHolder: '搜索报表标识'
	},
	service: {
		services: '服务列表',
		serviceName: '服务名称',
		txHash: '交易哈希',
		publisher: '提供者',
		from: '创建者',
		description: '描述',
		status: '服务状态',
        list:'服务列表',
        provider:'提供者',
        respondTimes:'响应次数',
        isAvailable:'是否可用',
        price:'单次调用价格',
        minBlock:'最小响应时间',
        time:'绑定时间',
	},
	transactionInformation:{
		transactionInformation: '交易详情',
		baseInfo:'基础消息',
		txHash: '交易哈希：',
		blockHeight: '区块高度：',
		status: '交易状态：',
		timestamp: '参考时间：',
		signer: '签名方：',
		memo: '备注：',
		transactionMessage: '交易消息',
		relevanceTx:'关联交易',
		txType: '交易类型',
		requestId: '请求标识',
		provider: '提供者',
		issueDenom:{
			denom: '报表类别：',
			schema: '上链结构：',
			sender: '创建者：',
		},
		send:{
			amount: '数量：',
			from: '发送方：',
			to: '接收方：',
		},
		callService: {
			consumer: '消费服务方：',
			input: '输入内容：',
			provider: '服务提供方：',
			repeated: '是否重复调用：',
			repeatedFrequency: '重复调用频率：',
			repeatedTotal: '重复调用总数：',
			serviceFeeCap: '服务费用：',
			superMode: '超级模式：',
			timeOut: '超时时间：',
			serviceName: '服务名称：',
			requestContextId: '请求标识：',
		},
		respondService:{
			output: '输出内容：',
			provider: '服务提供者：',
			requestId: '请求标识：',
			result: '响应结果：',
			serviceName: '服务名称：',
			requestContextId: '请求标识：',
		},
		pauseRequestContext:{//pauseRequestContext、startRequestContext、killRequestContext
			serviceName:'服务名称：',
			requestContextId:'请求标识：',
			consumer:'消费服务方：',
		},
		// startRequestContext:{
		// 	serviceName:'服务名称：',
		// 	requestContextId:'请求标识：',
		// 	consumer:'消费服务方：',
		// },
		// killRequestContext:{
		// 	serviceName:'服务名称：',
		// 	requestContextId:'请求标识：',
		// 	consumer:'消费服务方：',
		// },
		updateRequestContext:{
			serviceName:'服务名称：',
			requestContextId:'请求标识：',
			consumer:'消费服务方：',
			repeatedFrequency: '重复调用频率：',
			repeatedTotal: '重复调用总数：',
			serviceFeeCap: '服务费用：',
			timeOut: '超时时间：',
			provider: '服务提供者：',
		},
		updateServiceBinding:{
			serviceName:'服务名称：',
			pricing: '单次调用价格：',
			owner: '拥有者：',
			provider: '服务提供者：',
			qos: '最小响应时间：',
			deposit: '绑定押金：',
		},
		disableServiceBinding:{//disableServiceBinding、refundServiceDeposit
			serviceName:'服务名称：',
			owner: '拥有者：',
			provider: '服务提供者：',
		},
		enableServiceBinding:{
			serviceName:'服务名称：',
			owner: '拥有者：',
			provider: '服务提供者：',
			deposit: '绑定押金：',
		},
		// refundServiceDeposit:{
		// 	serviceName:'服务名称：',
		// 	owner: '拥有者：',
		// 	provider: '服务提供者：',
		// },
		burnNft:{
			sender: '发送方：',
			denom: '报表类别：',
			id: '报表标识：'
		},
		transferNft: {
			denom: '报表类别：',
			id: '报表标识：',
			recipient: '接收方：',
			sender: '发送方：',
			data: '链上数据：',
			uri: '链外链接：'
		},
		editNft:{
			denom: '报表类别：',
			id: '报表标识：',
			sender: '发送方：',
			data: '链上数据：',
			uri: '链外链接：'
		},
		defineService: {
			serviceName: '服务名称：',
			description: '描述：',
			tags: '标签：',
			author: '服务创建者：',
			authorDescription: '创建者简介：',
			schemas:'接口规范：',
		},
		bindService: {
			deposit: '绑定押金：',
			owner: '拥有者：',
			pricing: '单次调用价格：',
			provider: '服务提供者：',
			qos: '最小响应时间：',
			serviceName: '服务名称：'
		},
		mintNft: {
			denom: '报表类别：',
			id: '报表标识：',
			recipient: '接收方：',
			sender: '发送方：',
			data: '链上数据：',
			uri: '链外链接：'
		}
	},
	addressDetail: {
		addressDetail:'地址详情',
		txRecord:'交易记录',
		consumerTitle:'服务调用-作为消费者',
		providerTitle:'服务调用-作为提供者',
		respondRecord:'响应记录',
		assets: '资产列表',
		denom: '报表类别',
		name: '名称',
		id: '报表标识',
		data: '链上数据',
		uri: '链外链接',
		serviceType:'服务类型',
		respondTimes: '响应次数',
		available: '是否可用',
		deposit: '绑定押金',
		pricing: '单次调用价格',
		qos: '最小响应时间',
		bindTime: '绑定时间',
		disabledTime: '解绑时间',
		requestId: '请求标识',
		respondHash:'响应哈希',
		consumer:'消费者',
		requestHash:'请求哈希',
		provider:'提供者',
		requestStatus:'请求状态',
		time:'次',
		totalRespond:'共${%value%}条回复',
	},
	nftDetail: {
		nftInformation: '报表详情',
		owner: '拥有者：',
		denom: '报表类别：',
		id: '报表标识：',
		schema: '上链结构：',
		data: '链上数据：',
		creator: '创建者：',
		uri: '链外链接：',
		nftTxs: '相关交易'
	},
	serviceDetail: {
		serviceDefinition: '服务详情',
		primary: '基本信息',
		author: '创建者：',
		authorDescription: '创建者描述：',
		description: '服务描述：',
		name: '名称：',
		schema: '上链结构：',
		tags: '标签：',
		serviceBindings: {
			serviceBindings: '服务绑定',
			providers: '服务提供者',
			serviceName: '服务名称',
			available: '是否可用',
			deposit: '绑定押金',
			owner: '拥有者',
			pricing: '单次调用价格',
			provider: '提供者',
			qos: '最小响应时间',
			respondTimes: '响应次数',
			bindTime: '绑定时间',
			disabledTime: '解绑时间',
            hash:'绑定哈希'
		},
		serviceTransactions: '服务交易',
        hash:'定义类型交易',
        height:'定义区块',
        time:'定义时间',
        respondRecord:'服务响应记录',
        provider:'提供者',
        consumer:'消费者',
        requestHash:'请求哈希',
        respondHash:'响应哈希',
        txRecord:'响应记录',
	},
	searchResult:{
		title: '搜索结果',
		backHome: '返回首页',
		resultTitle: '搜索结果为空。',
		searchTip: '尝试搜索交易哈希或区块高度。'
	}
}
