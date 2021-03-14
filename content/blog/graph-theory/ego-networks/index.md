---
title: Ego Networks
date: "2020-12-06T08:12:03.284Z"
description: "The technologies powering this website."
featuredImage: "./ego-networks.png"
---

# Ego Networks

Networks consists of nodes and edges - where a node is simply a point, and an edge is a line that connects two points.

Nodes and edges usually have attributes e.g. a node can be a person and an edge can represent a relationship between two people.

When analyzing a social dataset there will be many nodes that directly and indirectly connect. If we were to pick one node and only care about its direct connections and eliminate all other nodes, the result would be an ego graph.

The proper term for the node that we selected is the **focal** node and its directly connected nodes are known as **alter** nodes. How they are connected or what connects them is known as their **ties**.

## Constructing Ego Networks

When constructing ego networks, an ideal start is to begin with the largest ego graph as possible. We can achieve this by having very broad conditions from the focal node to its alters. We can then discover subnetworks by being more specific about the ties of the focal node and its alters. 

An easy example is to use yourself as a focal node and imagine all of your closest contacts such as friends, family, and colleauges. Now consider the difference in that network if you only consider your family ties. What about immediate family only?

The specific tie that you have to someone is known as your **social relation** to them.

## Types of Social Relations

### 1. Role-based

A role-based relationship could be a social media friend, a co-worker, family member, or  anyone that is or was in an identifiable group with you.

### 2. Cognitive-affective (loves, hates, etc)

This is perhaps the most trivial category of social relations and can be easily inferred by frequencies in data. For example, if you purchase the same item numerous times then it is safe to assume that you like the item. There is a caveat, frequency does not particularly mean quality. In my case, just because I purchase food from a local restaurant often does not mean that it is my favorite restaurant. Access and availability are often big players of cognitive-affective relations.

### 3. Actions (works with, buys from)

This type of social relation is perhaps the most useful because it can lead to actionable insights. For example, imagine we worked at a very large company with many departments and we begin to construct our ego network starting with a role-based tie of simply all employees. We could then narrow our ego network down furtherly by our specific department, team, etc, but these relations fall short of relevant information.

However, imagine the ego network of our team under the conditions of **how** we work together.

## An Example

Lets use an inclusive version of the previous example where we are the focal node analyzing the ego network of where we work and lets cover all types of social relations.

I work at X => returns all employees of the company. 

I work in department X => returns all employees in the department.

I work under a manager with 10 coworkers => returns your 11 coworkers.

I work on network theory with two others => return two teammates.

I enjoy communicating more with Jane than John => results in a stronger tie with Jane then John.

I cooperate more with John than Jane => stronger tie with John than Jane.

## In Conclusion

I hope this was a simple introduction to ego networks. 