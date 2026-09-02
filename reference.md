# Reference
## Chat
<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">listChatCompletions</a>({ ...params }) -> ApologistAgent.ListChatCompletionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of chat completions (prompts) for the agent, with applied tags expanded as { id, name } and share metadata.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.listChatCompletions();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListChatCompletionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">createChatCompletion</a>({ ...params }) -> ApologistAgent.ChatCompletionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a chat completion using the agent's configured model. Supports both streaming and non-streaming responses.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.createChatCompletion({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ChatCompletionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">likeCompletion</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the like status of a specific chat completion
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.likeCompletion({
    id: "id",
    liked: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.LikeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">flagCompletion</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the flagged status of a specific chat completion
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.flagCompletion({
    id: "id",
    flagged: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.FlagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">feedbackCompletion</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds user feedback to a specific chat completion
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.feedbackCompletion({
    id: "id",
    feedback: "feedback"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.FeedbackRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">shareCompletion</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a share record for a specific chat completion
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.shareCompletion({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ShareRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.chat.<a href="/src/api/resources/chat/client/Client.ts">getChatCompletion</a>({ ...params }) -> ApologistAgent.GetChatCompletionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single chat completion (prompt) by numeric id or UUID, including applied tags, guardrail/cta metadata, share metadata, and automation results.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chat.getChatCompletion({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetChatCompletionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChatClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Corpus
<details><summary><code>client.corpus.<a href="/src/api/resources/corpus/client/Client.ts">searchCorpus</a>({ ...params }) -> ApologistAgent.SearchCorpusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs a semantic search across the agent's corpus of knowledge
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpus.searchCorpus({
    query: "query"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.CorpusSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorpusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corpus.<a href="/src/api/resources/corpus/client/Client.ts">logCorpusView</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that a user viewed a specific corpus item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpus.logCorpusView({
    model: "model",
    id: "id",
    prompt_id: "prompt_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ViewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorpusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corpus.<a href="/src/api/resources/corpus/client/Client.ts">logCorpusImpression</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that a corpus item was shown to a user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpus.logCorpusImpression({
    model: "model",
    id: "id",
    prompt_id: "prompt_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ImpressionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorpusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corpus.<a href="/src/api/resources/corpus/client/Client.ts">logCorpusReferralRedirect</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records a referral for a corpus item and, when a `url` is supplied, issues a 302 redirect to it. Without a `url`, responds with a success message. Requires either the search API entitlement or a signed `browser_key` cookie.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpus.logCorpusReferralRedirect({
    model: "model",
    id: "id",
    prompt_id: "prompt_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.LogCorpusReferralRedirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorpusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.corpus.<a href="/src/api/resources/corpus/client/Client.ts">logCorpusReferral</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that a user was referred to a corpus item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.corpus.logCorpusReferral({
    model: "model",
    id: "id",
    prompt_id: "prompt_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReferralRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CorpusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Evaluators
<details><summary><code>client.evaluators.<a href="/src/api/resources/evaluators/client/Client.ts">listEvaluations</a>({ ...params }) -> ApologistAgent.ListEvaluationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of evaluations for the evaluator, scoped to the requesting agent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.evaluators.listEvaluations({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListEvaluationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvaluatorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.evaluators.<a href="/src/api/resources/evaluators/client/Client.ts">evaluateContent</a>({ ...params }) -> ApologistAgent.EvaluateContentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Runs an evaluation on the provided content using the specified evaluator
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.evaluators.evaluateContent({
    id: "id",
    content: "content"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.EvaluatorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvaluatorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.evaluators.<a href="/src/api/resources/evaluators/client/Client.ts">getEvaluation</a>({ ...params }) -> ApologistAgent.GetEvaluationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single evaluation for the evaluator, scoped to the requesting agent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.evaluators.getEvaluation({
    id: "id",
    evaluationId: "evaluationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetEvaluationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EvaluatorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## CTAs
<details><summary><code>client.ctAs.<a href="/src/api/resources/ctAs/client/Client.ts">matchCtas</a>({ ...params }) -> ApologistAgent.MatchCtasResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Finds matching CTAs based on conversation context, user, session, device, or messages
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ctAs.matchCtas({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.CtaMatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CtAsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ctAs.<a href="/src/api/resources/ctAs/client/Client.ts">logCtaClick</a>({ ...params }) -> ApologistAgent.SuccessResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that a user clicked on a specific CTA
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ctAs.logCtaClick({
    id: "id",
    prompt_id: "prompt_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.CtaClickRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CtAsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUsers</a>({ ...params }) -> ApologistAgent.ListUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of users for the agent's team, with applied tags expanded as { id, name } and the persisted responder id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUsers();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">listUserFlags</a>({ ...params }) -> ApologistAgent.ListUserFlagsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of user flag definitions for the agent's team (all columns from user_flags), ordered by id ascending.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.listUserFlags();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListUserFlagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUser</a>({ ...params }) -> ApologistAgent.GetUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single user by external id or internal id, with expanded tags and the persisted responder for the agent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getUser({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateUser</a>({ ...params }) -> ApologistAgent.UpdateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a user's external_id and/or tags and upserts the persisted responder for the agent. Only provided fields are changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateUser({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.UserUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">scrubUser</a>({ ...params }) -> ApologistAgent.ScrubUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaces this user's message-adjacent text with a placeholder. Conversation rows, identifiers, flags, and analytics identity stay in place. Repeat calls finish leftover rows.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.scrubUser({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ScrubUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">anonymizeUser</a>({ ...params }) -> ApologistAgent.AnonymizeUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redacts detected personal data in this user's message-adjacent text with regex, then an optional hosted redaction service when the Agent has that option on. Conversation rows, identifiers, flags, and analytics identity stay in place. Repeat calls finish leftover rows and skip text that is already redacted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.anonymizeUser({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.AnonymizeUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Benchmarks
<details><summary><code>client.benchmarks.<a href="/src/api/resources/benchmarks/client/Client.ts">listBenchmarkRuns</a>({ ...params }) -> ApologistAgent.ListBenchmarkRunsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of runs for a benchmark, scoped to the requesting agent. Each run carries nested evaluators, questions, and a flat evaluations array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.benchmarks.listBenchmarkRuns({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListBenchmarkRunsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BenchmarksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.benchmarks.<a href="/src/api/resources/benchmarks/client/Client.ts">runBenchmark</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Executes a benchmark run and returns the aggregated result with nested evaluators, questions, and a flat evaluations array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.benchmarks.runBenchmark({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.BenchmarkRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BenchmarksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.benchmarks.<a href="/src/api/resources/benchmarks/client/Client.ts">getBenchmarkRun</a>({ ...params }) -> ApologistAgent.GetBenchmarkRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single benchmark run by id or UUID, scoped to the requesting agent, including nested evaluators, questions, and evaluations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.benchmarks.getBenchmarkRun({
    id: "id",
    runId: "runId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetBenchmarkRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BenchmarksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agent
<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">pauseAgent</a>() -> ApologistAgent.PauseAgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses the agent globally and fans out pause transition messages to open conversations. Requires an API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.pauseAgent();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">resumeAgent</a>() -> ApologistAgent.ResumeAgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes the agent globally and fans out resume transition messages to open conversations. Requires an API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agent.resumeAgent();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations
<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">listConversations</a>({ ...params }) -> ApologistAgent.ListConversationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of conversations for the requesting agent, newest first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.listConversations();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">getConversation</a>({ ...params }) -> ApologistAgent.GetConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a single conversation by internal UUID or team-scoped external id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.getConversation({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">pauseConversation</a>({ ...params }) -> ApologistAgent.PauseConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pauses the agent on a conversation identified by internal UUID or team-scoped external id. Requires an API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.pauseConversation({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.PauseConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">resumeConversation</a>({ ...params }) -> ApologistAgent.ResumeConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resumes the agent on a conversation identified by internal UUID or team-scoped external id. Requires an API key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.resumeConversation({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ResumeConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Channels
<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">getChatwootChannelStatus</a>({ ...params }) -> ApologistAgent.GetChatwootChannelStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the status of the Chatwoot channel. Used as a lightweight health/verification endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.getChatwootChannelStatus({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetChatwootChannelStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveChatwootWebhook</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives Chatwoot Agent Bot webhook events for the channel. Chatwoot owns the messaging inbox (Facebook, website widget, and others). This Agent replies through the Chatwoot API and maps native bot handoff to conversation pause/resume. Requests are verified via the `X-Chatwoot-Signature` HMAC-SHA256 header using the configured webhook secret unless an `api_key` is present and no secret is set. The route acknowledges immediately (Chatwoot times out in about 5 seconds) and processes events asynchronously.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveChatwootWebhook({
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveChatwootWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">getDiscordChannelStatus</a>({ ...params }) -> ApologistAgent.GetDiscordChannelStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the status of the Discord channel. Used as a lightweight health/verification endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.getDiscordChannelStatus({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetDiscordChannelStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveDiscordInteraction</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives Discord interaction callbacks for the channel. Requests are verified via Ed25519 signature headers; unsigned or invalid requests are rejected. Payload shape is defined by Discord.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveDiscordInteraction({
    "x-signature-ed25519": "x-signature-ed25519",
    "x-signature-timestamp": "x-signature-timestamp",
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveDiscordInteractionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">getLineChannelStatus</a>({ ...params }) -> ApologistAgent.GetLineChannelStatusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the status of the LINE channel. Used as a lightweight health/verification endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.getLineChannelStatus({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetLineChannelStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveLineWebhook</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives LINE Messaging API webhook events for the channel. Requests are verified via the `x-line-signature` HMAC-SHA256 (Base64) header using the channel secret unless an `api_key` is present. Payload shape is defined by LINE. The route acknowledges quickly and processes text `message` and `follow` events asynchronously.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveLineWebhook({
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveLineWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">verifyFacebookWebhook</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Handles the Meta webhook verification handshake, echoing `hub.challenge` when `hub.verify_token` matches the channel's configured token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.verifyFacebookWebhook({
    id: "id",
    "hub.mode": "subscribe",
    "hub.verify_token": "hub.verify_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.VerifyFacebookWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveFacebookMessage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives Facebook/Messenger (and Instagram-style) message events for the channel. Payload shape is defined by Meta.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveFacebookMessage({
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveFacebookMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">getInstagramPrivacyPolicy</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a static HTML privacy policy page for the Instagram integration.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.getInstagramPrivacyPolicy({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetInstagramPrivacyPolicyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveTelegramUpdate</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives Telegram bot update events for the channel. Non-message updates are acknowledged and ignored. Payload shape is defined by Telegram.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveTelegramUpdate({
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveTelegramUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveTwilioMessage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives inbound Twilio messages for the channel as form-encoded data. Payload fields are defined by Twilio.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveTwilioMessage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveTwilioMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">verifyWhatsAppWebhook</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Handles the Meta WhatsApp Cloud API webhook verification handshake, echoing `hub.challenge` when `hub.verify_token` matches the channel's configured token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.verifyWhatsAppWebhook({
    id: "id",
    "hub.mode": "subscribe",
    "hub.verify_token": "hub.verify_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.VerifyWhatsAppWebhookRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.channels.<a href="/src/api/resources/channels/client/Client.ts">receiveWhatsAppMessage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Receives WhatsApp Cloud API message events for the channel. Payload shape is defined by Meta. Signature verification via `x-hub-signature-256` is used when the channel has an App Secret configured; otherwise the webhook relies on URL secrecy and/or an `api_key` query parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.channels.receiveWhatsAppMessage({
    id: "id",
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.ReceiveWhatsAppMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ChannelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Shares
<details><summary><code>client.shares.<a href="/src/api/resources/shares/client/Client.ts">getSharedMessages</a>({ ...params }) -> ApologistAgent.GetSharedMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Public, unauthenticated read of the messages behind a share token. The token is the bearer capability and enforces tenant isolation against the host agent. An empty or invalid token yields an empty messages array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shares.getSharedMessages({
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `ApologistAgent.GetSharedMessagesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SharesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

