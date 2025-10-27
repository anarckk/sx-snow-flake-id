# sx-snow-flake-id

雪花ID生成器，用于生成分布式唯一ID。

## 安装

```bash
npm install sx-snow-flake-id
```

## 使用方法

```javascript
import { generateSnowflakeId, RandomSnowFlakeId, SnowFlakeId } from 'sx-snow-flake-id';

// 使用全局单例生成雪花ID
const id1 = generateSnowflakeId();

// 创建随机雪花ID生成器
const randomGenerator = RandomSnowFlakeId();
const id2 = randomGenerator.nextId();

// 创建指定 workerId 和 datacenterId 的雪花ID生成器
const generator = SnowFlakeId(1, 1);
const id3 = generator.nextId();
```

## API

### generateSnowflakeId()
使用全局单例生成雪花ID

### RandomSnowFlakeId()
创建随机雪花ID生成器

### SnowFlakeId(workerId, datacenterId)
创建指定 workerId 和 datacenterId 的雪花ID生成器

## 许可证

MIT