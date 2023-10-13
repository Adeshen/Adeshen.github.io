---
title: 阅读笔记 Cross-Modal Implicit Relation Reasoning and Aligning for Text-to-Image Person Retrieval
author: adeshen
date: 2023-10-13 18:41:00 -0500
categories: [Cv,Text2image]
tags: [cross-Modal,text2image]
---

# 望文生义

[[2303.12501] Cross-Modal Implicit Relation Reasoning and Aligning for Text-to-Image Person Retrieval](file:///D:/SUSYstudy/grade4-1/LLM_video/storage/EW27Z4PQ/2303.html)

根据自然语言所给出的目标，通过发现多模态中隐式关系，进行行人检索

# 论文简要 :

- 前人方法：缺乏对齐各个模态的能力

* 本文提出了一种跨模态隐式关系推理与对齐框架(IRRA)，用于文本到图像的人物检索，通过隐式关系推理和对齐来学习视觉和文本模态之间的映射关系，实现更好的图像-文本匹配。通过设计隐式关系推理模块和相似性分布匹配损失函数，IRRA在三个公共数据集上取得了新的最优结果，与之前的方法相比，Rank-1准确率提高了约3%-9%。
* 创新：首次设计一个隐式推理关系模块，可以有效融合视觉和文本表示，并且通过MLM的方式对齐多个模态。

# 前人模型

masked language model（MLM） 不了解

> [预训练语言模型综述 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/144927093)  包含MLM的描述

ranking loss  不了解

> [一文理解Ranking Loss/Margin Loss/Triplet Loss - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/158853633)

cross-modal projection matching (CMPM) [53] 不了解；

Contrastive Language-Image Pre-training (CLIP)   本作基础模型
