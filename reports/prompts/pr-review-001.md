# Task: Review a proposed implementation for correctness and missing tests

Type: pull-request-review
Objective: Evaluate a simulated pull request diff using production review standards.

## Agents
- review-agent

## Expected Outputs
- ordered findings
- test gaps
- residual risks

## Success Criteria
- prioritizes bugs first
- uses actionable wording
- mentions missing tests

## Repository Context
## fixtures/diffs/validation-feature.diff
diff --git a/src/routes/users.js b/src/routes/users.js
index 1f4a111..9c5b112 100644
--- a/src/routes/users.js
+++ b/src/routes/users.js
@@ -1,8 +1,11 @@
 export async function createUserHandler(req, res) {
-  const user = await createUser(req.body);
+  const payload = normalizePayload(req.body);
+  const user = await createUser(payload);
   res.status(201).json(user);
 }
+
+function normalizePayload(payload) {
+  return { ...payload, email: payload.email && payload.email.trim() };
+}
diff --git a/tests/users.test.js b/tests/users.test.js
index 33ab101..73ea441 100644
--- a/tests/users.test.js
+++ b/tests/users.test.js
@@ -10,3 +10,8 @@ test("creates user", async () => {
   expect(response.status).toBe(201);
 });
+
+test("trims email whitespace", async () => {
+  const response = await request(app).post("/users").send({ email: " a@example.com " });
+  expect(response.status).toBe(201);
+});



## prompts/review-agent.md
# Review Agent Prompt

You are a code review agent.

Review the proposed diff as if it were a production pull request.

Focus on:

- Correctness
- Edge cases
- Security
- Performance
- Backward compatibility
- Missing tests
- Maintainability

Return findings ordered by severity. Include file and line references when available. If no issues are found, say so and list residual risks.



## docs/workflow-zh.md
# MiMo Coding Agent 工作流说明

## 背景

传统 AI 编程助手通常只处理单个文件或短上下文问题，但真实研发任务往往需要模型理解完整项目。尤其是 Agent 工作流，会反复读取需求、代码、测试、日志和历史修改记录。

MiMo-V2.5-Pro 的长上下文能力适合这类场景，因为它可以减少上下文切片带来的信息丢失，让模型更稳定地理解工程全貌。

## 工作流设计

### 1. Repository Context Loader

收集项目上下文：

- 目录结构
- README
- package 配置
- 关键源码
- 测试文件
- 最近变更
- 错误日志

### 2. Planning Agent

输出：

- 任务拆解
- 影响范围
- 修改计划
- 风险点
- 测试计划

### 3. Coding Agent

输出：

- 代码修改方案
- 多文件改动
- 测试补充
- 类型错误修复

### 4. Review Agent

检查：

- 是否遗漏边界条件
- 是否引入兼容性问题
- 是否缺少测试
- 是否存在安全或性能风险
- 是否符合项目现有风格

### 5. Test Diagnosis Agent

处理：

- 单元测试失败
- 构建失败
- 类型检查失败
- 运行时错误
- 回归问题

### 6. Documentation Agent

生成：

- README 更新
- API 文档
- 迁移说明
- 发布说明
- 示例用法

## 评估指标

- 任务完成率
- 代码正确性
- Review 有效性
- 测试修复成功率
- 文档可读性
- Token 消耗
- 平均完成时间

