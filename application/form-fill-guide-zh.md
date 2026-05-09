# MiMo Orbit 申请表填写指南

下面内容可以直接复制到申请表中。请根据表单实际字段微调。

## 申请档位

选择最高档：

Max Plan / 最高 Token 额度

## 项目名称

MiMo Coding Agent Workflow Kit

## 项目一句话介绍

一个面向个人开发者和小团队的 AI Coding Agent 工作流，用 MiMo-V2.5-Pro 的长上下文能力完成代码理解、任务拆解、代码生成、Review、测试修复和文档生成。

## 项目详细介绍

我正在搭建一个面向个人开发者和小团队的 AI Coding / Agent 自动化研发工作流，目标是把需求分析、代码理解、任务拆解、代码生成、Pull Request Review、测试失败诊断和文档生成串成一个可持续运行的工程闭环。

这个项目重点验证 MiMo-V2.5-Pro 在真实开发任务中的能力，尤其是 100 万上下文窗口对完整代码仓库理解、多文件修改、测试日志分析和长链路 Agent 协作的帮助。

工作流包含 5 类 Agent：

1. 需求分析 Agent：读取需求、历史 issue、代码结构和现有实现，自动生成技术方案、影响范围和任务拆解。
2. Coding Agent：根据拆解结果完成代码修改、补充测试、修复类型错误和运行失败问题。
3. Review Agent：对 Pull Request 或本地 diff 进行自动审查，重点检查边界条件、兼容性风险、安全问题、缺失测试和可维护性问题。
4. Regression Agent：读取测试日志、构建失败记录和运行结果，自动定位失败原因并提出修复方案。
5. Docs Agent：基于代码变更自动生成 README、接口说明、迁移说明和发布说明。

如果获得较高 Token 额度，我会完成不少于 20 个真实 coding-agent 任务测试，并整理 MiMo 在任务成功率、代码质量、测试修复能力、长上下文稳定性和 Token 成本方面的表现。

## 常用 AI 开发工具

建议勾选：

- Codex
- Cursor
- Claude Code
- OpenCode
- Cline
- Aider

如果表单要求填写文本，可以写：

目前主要使用 Codex、Cursor、Claude Code、OpenCode、Cline 和 Aider 搭建 AI Coding / Agent 工作流，后续计划将 MiMo-V2.5-Pro 接入并作为重点评估模型。

## 使用的模型

建议选择：

- MiMo 系列
- GPT 系列
- Claude 系列
- DeepSeek 系列

如果表单要求填写文本，可以写：

当前主要对比 MiMo、GPT、Claude 和 DeepSeek 系列模型在 Coding Agent 场景下的表现，重点评估长上下文代码理解、多文件修改、测试修复和 Agent 任务完成率。

## 为什么申请最高额度

Coding Agent 的核心消耗来自长上下文和多轮任务链路。一次真实任务可能包含完整目录结构、多个源代码文件、README、需求说明、测试日志、错误栈、多轮修复历史和 Review 结果。

单个完整任务预计消耗 10 万到 100 万 Tokens。每日如果进行 3 到 8 个任务验证，预计消耗 300 万到 800 万 Tokens。为了完成 4 周以上的连续评估、多模型对比、长上下文压测和 Prompt 优化，需要 Max Plan 支持。

高额度 Token 将用于：

- 真实 coding-agent 任务测试
- 长上下文代码仓库理解
- 多模型横向对比
- Prompt 模板优化
- 自动 Review 和测试修复评估
- 公开实践文档和 Demo 整理

## 预期产出

如果获得 Max Plan，我会产出：

- 一个公开 GitHub 示例仓库
- MiMo Coding Agent 工作流说明
- Prompt 模板
- 不少于 20 个任务测试记录
- MiMo 与其他模型的 Coding Agent 对比记录
- 一篇 MiMo Coding Agent 实践文章

## 证明材料

可填写或上传：

- GitHub 仓库：填写你后续上传本项目后的仓库链接
- 项目 README 截图
- 工作流说明截图
- Prompt 模板截图
- 本地项目目录截图

## GitHub 仓库描述

MiMo Coding Agent Workflow Kit: a lightweight evaluation and prompt template repository for testing MiMo-V2.5-Pro in long-context AI coding agent workflows.

