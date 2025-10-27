/**
 * 雪花ID生成器接口
 */
interface SnowFlakeIdGenerator {
  nextId(): string;
}

/**
 * 生成雪花ID
 * @returns 雪花ID字符串
 */
export function generateSnowflakeId(): string;

/**
 * 创建随机雪花ID生成器
 * @returns 雪花ID生成器实例
 */
export function RandomSnowFlakeId(): SnowFlakeIdGenerator;

/**
 * 创建指定 workerId 和 datacenterId 的雪花ID生成器
 * @param workerId - 工作节点ID (0-31)
 * @param datacenterId - 数据中心ID (0-31)
 * @returns 雪花ID生成器实例
 */
export function SnowFlakeId(workerId: number, datacenterId: number): SnowFlakeIdGenerator;