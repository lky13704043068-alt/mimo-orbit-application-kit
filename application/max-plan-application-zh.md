# MiMo Orbit Max Plan 申请文案

## 项目名称

MiMo Coding Agent Workflow Kit：面向个人开发者和小团队的长上下文 AI 编程 Agent 工作流

## 项目简介

我正在搭建一个面向个人开发者和小团队的 AI Coding / Agent 自动化研发工作流，目标是把需求分析、代码理解、任务拆解、代码生成、Pull Request Review、测试失败诊断和文档生成串成一个可持续运行的工程闭环。

这个项目不是一次性的模型体验，而是一个长期用于真实开发任务的 Agent 工作流验证项目。MiMo-V2.5-Pro 的 100 万上下文窗口、Coding 能力、Agent 能力和较高 Token 效率非常适合该项目，因为真实 Coding Agent 经常需要一次性理解完整代码仓库、历史需求、接口文档、测试日志和多轮修改记录。

## 当前使用工具

我计划使用并评估以下 AI 开发工具和 Agent 工具：

- Codex
- Cursor
- Claude Code
- OpenCode
- Cline
- Aider

底层模型会重点对比：

- MiMo 系列
- GPT 系列
- Claude 系列
- DeepSeek 系列

## 核心使用场景

项目包含以下 5 类 Agent：

1. 需求分析 Agent：读取需求、历史 issue、代码结构和现有实现，自动生成技术方案、影响范围和任务拆解。
2. Coding Agent：根据拆解结果完成代码修改、补充测试、修复类型错误和运行失败问题。
3. Review Agent：对 Pull Request 或本地 diff 进行自动审查，重点检查边界条件、兼容性风险、安全问题、缺失测试和可维护性问题。
4. Regression Agent：读取测试日志、构建失败记录和运行结果，自动定位失败原因并提出修复方案。
5. Docs Agent：基于代码变更自动生成 README、接口说明、迁移说明和发布说明。

## 为什么需要高额度 Token

Coding Agent 的核心瓶颈不是单次问答，而是长上下文和连续多轮工程任务。一次真实任务通常会包含：

- 项目目录结构
- 多个源代码文件
- 需求说明
- 历史修改记录
- 测试日志
- 构建失败信息
- 多轮 Agent 规划和修复过程

单个完整任务预计消耗 10 万到 100 万 Tokens。如果进行连续研发验证，每日预计消耗 300 万到 800 万 Tokens。为了完成至少 4 周的稳定性测试、长上下文压测、多模型对比和 Prompt 策略优化，需要较高额度的 Token 支持。

如果获得 Max Plan，我会优先完成以下目标：

1. 将 MiMo-V2.5-Pro 接入 AI Coding / Agent 工作流。
2. 完成不少于 20 个真实 coding agent 任务测试。
3. 覆盖代码生成、代码重构、Review、测试修复和文档生成等场景。
4. 对比 MiMo 与 GPT、Claude、DeepSeek 在 Agent Coding 场景下的表现。
5. 输出一份 MiMo Coding Agent 使用实践文档，包括接入方式、Prompt 模板、适用场景、成本估算和避坑经验。
6. 将项目配置、Prompt 模板或 Demo 开源到 GitHub，帮助更多开发者接入 MiMo。

## 可验证产出

我会把评估结果整理为以下公开或半公开材料：

- GitHub 示例仓库
- Agent 工作流说明
- Prompt 模板
- 测试任务记录
- 多模型对比表
- MiMo Coding Agent 使用实践文章

## 申请理由总结

我申请 Max Plan 的原因是：这个项目属于高频、长上下文、强工程化的真实 Agent/Coding 场景，能够充分发挥 MiMo-V2.5-Pro 的 100 万上下文能力和 Coding / Agent 能力。高额度 Token 可以帮助我完成系统性评估，而不是浅层试用。后续我会把有效经验整理成文档、模板或开源示例，为 MiMo 生态提供真实开发者反馈和可复用的实践案例。

