---
title: 阅读笔记 Video-LLaMA
author: adeshen
date: 2023-10-16 11:17:00 -0000
categories: [LLM,Cv]
tags: [cross-Modal,video-understanding]
---
# 望文生义

[[2306.02858] Video-LLaMA: An Instruction-tuned Audio-Visual Language Model for Video Understanding (arxiv.org)](https://arxiv.org/abs/2306.02858)

通过指令微调的方式，让大模型来进行视频(audio+visual)理解。

# 引言

Video-LLaMA 一个使大型语言模型（LLM）能够理解视频中的视觉和听觉的内容的多模态框架。它从冻结的预训练的视觉和音频encoder以及冻结的LLM中引导跨模态训练。

与之前专注于静态图像的视觉LLM不同，如（MiniGPT-4/LLaVA），Video-LLaMA主要解决了两个挑战

1. 捕捉视觉场景中的时间变化
   提出一种视频QFormer,将预训练的图像编码器组装到我们的视频编码器中，并引入视频到文本生成任务来学习视频语言对应关系。
   整合视听信号。
2. 利用ImageBind，这是一种将多个模态对齐的通用嵌入模型，作为预训练的音频编码器，并在ImageBind之上引入音频Q-Former，以学习LLM模块的合理听觉查询嵌入。为了使视觉和音频编码器的输入与LLM的嵌入空间对齐，使用大量指令调整(instruct-tuned)数据集训练Video-LLaMA。

# 相关工作

1. LLM模型。我们的工作基于这些出色的LLM，并提供即插即用的插件，使他们能够理解视频中的视觉与听觉内容。
2. 多模态LLM模型（两类）

   - 使用LLM作为控制器，并使用现有的多模态模型作为工具。当接受到指令时，LLM识别用户意图并决定调用哪些工具。最后结合多模态模型的结果来生成综合响应。如chatgpt等
   - 训练基本的大规模多模态模型，关键思想为将其他模态预训练模型与文本LLM对齐，如BLIP2，visualGLM，引入Q-Former将学习到的图像查询映射到LLM的文本嵌入空间。
3. Video-LLaMA限制

   - 感知能力有限
   - 处理长视频能力有限
   - 幻觉问题，继承了冻结LLM的幻觉问题。
     - 句法和语义正确但是与现实完全脱节，基于错误假设的模 型生成的输出，会导致伦理问题，道德问题。
     - 原因。过拟合；encode和decode错误；训练数据的偏差，以及训练数据缺乏多样性。
