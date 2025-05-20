---
publish-status: published
intentions:
 - Real-life UX
 - Crowd psychology
layout: post
title:  '**"The Design of Everyday Things"** by Donald A. Norman (personal notes)'
date:   2024-02-07 14:13:12 +0200
---
^
_Those are my personal notes on Donald A. Norman’s book “The Design of Everyday Things”, about the design of everyday things._
^
# [Elegant design](https://www.youtube.com/watch?v=EXi2ttQ-Vow)
* **Design is the link between the intention behind a product, and its actual use.**
	* A good product can go to waste due to bad design.
	* <a name="^understand-people"></a>Design is all about understanding people and the human mind.
	* Engineers are notoriously bad designers.
		* Engineers tend to understand technology very well, people very poorly.
		* Engineers think very logically and assume everyone else does as well; the truth is, most people don't, and we have to design for that.
	* **"Design for people the way they really are, not the way you would like them to be."**
	*  **Excessive measures are often counterproductive.** Unreasonable requirements leads to defeated purposes (through workarounds).
- <a name="^brainstorm"></a>**Double-diamond model of brainstorming**: first brainstorm the problem, then brainstorm the solution. Brainstorm the (actual) problem; then brainstorm the solution. For each phase, first diverge, and then converge. (Human-centered design "double diamond model") (× [Improvise!]({% link 0-book-review/_posts/2022-12-15-improvise-max-dickins-summary.md %}#brainstorming))
* Just like relationships, elegant design requires no labels.
	* Use label-less signifiers
		* Place the controls on their object; otherwise next to it.
		* Else, let the arrangement of the controls mimic the arrangement of their objects.
		* Else, let the controls share a defining characteristic with their object (color, shape)
	* Obviate the need for manuals, especially for simple objects. Manuals should only be necessary for complex objects.
		* Make the manual or help section easily discoverable.
* **Signs can be used to override misleading signifiers** (a sign "Push" on a door can counteract a handle that signifies pulling).
* **Experience design addresses the emotions arising from the use of the product** (when things go as planned — and when they don't).
	* The "cherry on top" of designing: making the product delightful and enjoyable to use; on top of working well.
	* **Underpredict to generate positive emotions** (give pessimistic estimates).
^
* The elements of good design are "feed-forward" (usability), clarity on the current state of the device, and feedback.
	* "Feed-forward"
		* "Feedback" is the device giving information on what just happened. "Feed-forward" is the device giving information on what can happen, on the possible actions.
	- Current state
		* A device should explain what it's currently doing. Its current state should be clear.
		* **The human brain can only "hold" 5-6 "items" in its working memory.**
			* **A product should not rely on the working memory of a user.**
			* **Make your products "interruption-proof"**: give at all time all relevant information about the current state of the device or current step of a procedure.
		* **"The most effective way of helping people remember is to make it unnecessary."**
	- Feedback
		* **Feedback is both about acknowledging the action and communicating its results.** Both "We received your demand" and "Here are the results". A lack of acknowledgement might lead the user to doubt whether their action was registered properly, and can damagingly encourage the user to repeat the action (cf. double form submission).
		* **Feedback needs to be immediate, clear, and informative.**
		* **Using a product should be like grabbing a glass.** A product's feedback mechanism should mimic the immediateness and intuitiveness of the nervous system's feedback mechanisms of proprioception and touch.
			* Though, in this case, it is the nervous system which universally makes objects intuitive to grab.
		- **Use a different sensory medium for feedback to minimize interference.** Minimize working-memory interference by using sensory modalities for feedback different from the primary one being used during operation (e.g. auditory feedback for driving, which is primarily visual).
		* **Too much feedback is less feedback.** Because of a decreased signal-to-noise ratio and increased cognitive load, excessive feedback detracts from the important feedback.
			* Instead, simplify and if needed synthesize the information conveyed (× [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}): year plan, experiment cards).
			* Separate obtrusive feedback (for important messages) from unobtrusive feedback (for general information).
^
- **Activity-based organization:** Instead of grouping objects or controls by similarity, grouping them by activity is sometimes more convenient.
	* However, **activity-based organization makes edge cases and custom needs more difficult to handle**: for example going beyond the presets, or retrieving an item similar yet pertaining to a different activity.
^
* **When all else fails, standardize.** If no good design solution can be found to make a product intuitive to use, standardize.
	* <a name="^standardize-to-learn-once"></a>**Design everything the same way, so people only have to learn once.** Standardization makes skills transferrable across products.
* <a name="^legacy-problem"></a>**The legacy problem: after widespread acceptance, a standard is difficult to change, however inefficient or inelegant it is**, even when the design was made to address issues now irrelevant.
* **Mixed systems are confusing to everyone.** "if there is to be a change, everybody has to change."
^
* "Design is a powerful equalizing tool: all that is needed is observation, creativity and hard work — anyone can do it."
^
# Design by accident (or by design)
* **Signifiers convey information regardless of intentionality (accidental signifiers).** Objects, people, places, systems can unwittingly give information about things ("clues", e.g. trailing). "Once I interpret a flag's motion to indicate wind direction, it does not matter why it was placed there."
	* **Interpretation is intelligence.** Seeing clues that others do not see, and being able to derive from objects and artifacts an understanding about the environment they are situated in, is a sign of intelligence.
^
* **Misuse leads to more misuse:** misuse of a product can lead to the appearance of detrimental signifiers, calling for further misuse — an accidental and damaging instance of "leading by example" and the beginning of a vicious cycle.
	* The emergent signifiers emphasize an unwanted affordance.
	* The emergent signifiers give the illusion of norm.
* <a name="^anti-affordances"></a>**Anti-affordances**: let the object exhibit a feature making unwanted actions counter-intuitive, impossible, or seemingly impossible.
	* **Anti-affordances can be fake**: anti-affordances don't have to make the action impossible, only make it seem impossible. This can be used to advantage by a knowing personnel (**fake anti-affordances are a means of authorization**).
	* Invisible affordances (duress codes, panic passwords), just like fake anti-affordances, require extra knowledge "in the head" of the operator (× experiencing one's surroundings as a handyman — knowing the innerworkings of everything — a new dimension)
		* Duress codes are only noticed by people with extra knowledge "in the head" (× steganography; secret handshakes; in-groups).
^
# <a name="^knowledge-world-head"></a>Knowledge in the world, knowledge in the head
* **Knowledge can be "in the world" or "in the head".**
	* **Knowledge in the head is faster to deploy and more efficient, at the cost of requiring prior learning.** Knowledge in the head doesn't require searching or interpreting in the moment.
	* **Knowledge in the world lets anyone use the product, without prior knowledge.**
	* × [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}#^standard-doc): the standard task procedure pinned at the entrance of a work cell, first being regularly referred to, but then internalized, is an example of turning knowledge "in the world" into knowledge "in the head".
	* **Design products both for basic use with knowledge in the world, and advanced use with knowledge in the head.**
	* **Culture and conventions are knowledge in the head.**
	* **Note-taking and self-organization is knowledge in the world,** "externalized" knowledge.
	* **People typically only ever learn the minimum required knowledge** (for using a tool, performing an operation).
^
# <a name="^conceptual-models"></a>Conceptual models
* **Everybody has conceptual models about everything, more or less detailed, more or less right.
	* Every person has a conceptual model of every object they use — more or less detailed, more or less right.
		* A device acting in an unexpected way often points to a faulty conceptual model and calls for revising it.
			- <a name="^be-exposed-then-understand"></a>**Learning by being exposed to things we do not understand — in order to upgrade our conceptual model thereof.**
		* The (right) conceptual models play an essential role in how intuitive or logical something seems.
			- The product is the only point of contact between the designer and the end user; the only place where the designer's (accurate) conceptual model of the product can be conveyed to the end user.
				* It is the designer's responsibility to convey an accurate conceptual model of the product to the user, by means e.g. of intuitive interface design.
	* "People create mental models of themselves, others, the environment." (× [Psycho-Cybernetics]({% link 0-book-review/_posts/2023-08-15-the-new-psycho-cybernetics-summary.md %}))
		- The understanding of how one works, how others work, can be more or less shallow (transactional) or deep (emotional relating and understanding, insight at the person's spiritual life path).
			* The conceptual model we have of ourselves might not be accurate.
* **To simplify thought, use simplified models** — approximations to the true underlying state of affairs.
	* Science is about accuracy and absolute truths; the practical world is about quick results and "good enough" measurements.
	* **Start with simplified mental models and un-simplify them as the circumstances demand.**
		* Simplified conceptual models founder when the situation gets more complex, requiring an updated un-simplification of the mental model, i.e. one degree of abstraction less, or one degree of depth more (× incremental reading; "... explained in 5 levels of difficulty").
^
# <a name="^errors"></a>Reducing errors
* **Blame the product (or designer), not the user.** Unless the user is the designer.
	- Human error is usually a result of poor design.
	* **Instead of finding someone to blame, find something to blame.**
	* People tend to only report glitches or bugs as opposed to human-made errors, even though the latter might be caused by faulty design.
		* <a name="^conspiracy-of-silence"></a>**Conspiracy of silence:** when many people experience the same struggle and assume others are okay, they do not openly share their struggle; therefore nobody realizes everyone has the same problem, and people miss a chance to team up and support one another. (× Brené Brown: "Shame needs judgment and secrecy", × [my summary of Sex Talks]({% link 0-book-review/_posts/2023-06-15-sex-talks-vanessa-marin-summary.md %}) (shameless plug))
	* **Reporting errors is a prerequisite for reducing errors.** (× [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}), culture of error reporting, andon cord)
		* **Report errors to an independent third party if the culture isn't ready.** The third party can feed back to the organisation.
- Humans are bad at giving precise, accurate, consistent input to machines; and machines are bad at evaluating input with common sense, being smart and critical about it. (A match made in heaven)
	* × [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}): use machines to support humans; humans are the most flexible resource of a company.
	* **"The combination of human plus machine can beat the best human and the best machine."**
* **Automation makes errors less likely to be noticed.** Automation reduces attention, which makes errors less directly noticeable.
* **Automation makes errors more laborious to understand and correct.** When an error happens, the person is "out of the loop" and has to take time to get up-to-speed with the environment first; only then be able to troubleshoot the error and remedy it.
* **A good system needs error prevention, detection and correction.**
	* Prevention
		* **Design machines on the assumption that people will make errors.**
			* **Minimize the opportunities for errors.**
		* **Emphasize what the user could be mistaken about.**
			* **Sensibility checks: equip machines with common-sense safeguards to prevent and detect unusual behaviour** (e.g. charging someone an inordinate amount of money).
		* **Make it harder to do what cannot be reversed.**
		* **Sterile Cockpit Configuration:** momentarily limit all communication to only what is relevant to the current situation, to prevent slips. "Sterile periods."
			-  Create a system that minimizes or altogether precludes interruptions.
			* <a name="^too-sterile"></a>**Too Sterile Cockpit Configuration:** planes crashed because the copilot didn't dare question pilot's decision.
		* **Use constraints to guide action.** Constraints are knowledge in the world.
			* For example, epics are made easier to memorize through the constraints of semantics and rhyme.
			* **Use lock-outs to prevent people from (accidentally) doing something or starting an operation** (an enforced form of <a href="#^anti-affordances">anti-affordances</a>).
			* **Use interlocks to impose that steps be completed in the right order.**
			* **Use lock-ins to prevent people from leaving or stopping an operation prematurely.**
		* <a name="^make-small-differences-big"></a>**Make small differences big:** as a designer, accentuate the differences (or make new ones) between two similar things easily confused.
			* <a name="^slips-mistakes"></a>This helps prevent:
				* **Sequence slips: mistaking two things because they share a similar sequence** (Capture slips.)
				* **Function slips: using the wrong object because it serves a similar purpose** (e.g. putting the water kettle on a stovetop instead of the kettle base, "to heat it up")
				* **Object slips: mistaking two objects because of their association with the same action**
			* Make different sets of objects incompatible (drugs in a hospital; cables and connectors)
		* **To prevent memory lapses, use checklists, constraints, and current state information.**
			* **Checklists can be well or badly designed.**
	* Detection (× Jidoka, [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}) (automatic stopping mechanisms))
		- **It is easier to notice something done wrong than something not done** (forgotten).
		- **Make it very visible if something was not done** (that should have been done). (× shadow boards; visual inventory ([The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %})); error detection, "make errors visible" [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %})) (× <a href="#^make-small-differences-big">"Make small differences big"</a>)
	* Correction
		* Let the machine explain errors clearly and try to assist the user all the same towards their objective.
		* **Mitigate the consequences of errors and make actions reversible.**
- **Swiss cheese analogy: Certain events result from a combination of causes.**
	* **The proximate cause isn't the only cause (the last straw isn't the only straw).** Even though something ultimately caused an accident (proximate cause, direct cause), the accident still required the combination of all the other contributing factors — without any one of which it would not have happened.
	* **Do not confuse a factor with the root cause.**
		* **For complex events, root cause analysis should be root *causes* analysis.** Root cause analysis tends to suggest there is ever only a single root cause, while in fact there can be multiple root causes.
	* Instead of blaming the "final layer" (proximate cause), one should review the whole system and make the whole more secure.
		* To make a system more secure:
			* **Add lines of defence** (more layers)
			* **Set them up redundantly** (redundancy in what is covered by the layers)
				* **Redundancy provides additional safety.**
			* **Reduce the possibility of error.** (fewer or smaller holes)
		* Well-designed systems are impervious to a single failure.
			* Chaos monkey: deliberately attacking a system to see if it responds well
* **An unlikely event is way more likely to occur if the factors are already present.**
* <a name="^less-ownership-less-vigilance"></a>**Less ownership or shared ownership means less vigilance.** Have somebody be responsible (× [The Toyota Way]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}#^single-point-accountability), single-point accountability).
^
# <a name="^incremental-radical"></a>Incremental improvements, radical improvements
* Incremental improvements are "safe" whereas radical improvements are "risky", as the market might not be ready for the product yet.
	* Radical improvements take time (often decades, centuries) before being adopted.
	* People and culture do not change at the pace of technology. "It can take months to go from invention to product, but decades for the product to get accepted."
	* Facilitate adoption of radical innovations by making them "look" or "feel" like the old. By giving new things the appearance of old things, we decrease the cognitive load/burden of change.
* **Incremental innovation starts with an existing product and looks at how it can be improved. Radical innovation starts fresh.** Incremental improvements are based on the present, while radical improvements are based on a vision for the future (x The Toyota Way: [vision]({% link 0-book-review/_posts/2023-11-30-the-toyota-way-jeffrey-liker-summary.md %}#^future-state))
* <a name="^hill-climbing"></a>**"Hill-climbing": the "local best" might still be low. Sometimes it is necessary to change hills.** Incremental improvements bring you to the local best (highest point in the hill), but a radical change of circumstances is required to go beyond this. Radical improvements represent a change of paradigm or reference point and let you change the scenery (for better or for worse). "Find another hill."
* Radical improvement looks at the true need behind the product (root cause analysis, five whys) and comes up with creative, novel solutions addressing the root problem.
^
# <a name="^stakeholders"></a>Stakeholders and business interests
- Marketing vs design
	* Marketing is about convincing people to purchase the product; design is about giving them a great experience using the product.
	* Marketing is knowing what people will buy; design is knowing what people actually need.
	* The two can be at odds; though both are necessary and valuable.
	* It is difficult to know the usability of a product prior to purchasing it; one can be "tricked" by marketing.
- There are multiple groups one can design for. The purchaser and the end user might be different; and there might be on top of that multiple parties each having different demands for the product.
	* For example, when designing a sink, are you designing it for the plumber, the interior designer, the housing company, the end user?
	* When customer groups have conflicting needs, build different versions of the product to cater for each group.
* Each team in a company corresponds to a demand from the outside world (customer) (price, usability, enjoyment, prestige, etc.). Each is necessary and valuable.
	* All teams should operate in close contact with one another and understand each other; this should be ensured and facilitated by management.
	* Management is about having the big picture in mind and prioritizing, reaching a consensus across the different teams. (× the "orchestrating" self in [Your Symphony of Selves]({% link 0-book-review/_posts/2023-03-15-your-symphony-of-selves-summary.md %}); the self with the big picture in mind)
	* "It is often possible to reach satisfactory solutions for all the needs."
* <a name="^capitalize-on-strengths"></a>**Capitalize on your strengths instead of constantly trying to catch up with your shortcomings**. If the product has real strengths, it can afford to just be "good enough" in other areas (× Self). **The attempt to match the competition causes all products to become the same.** 
	* Focus on the people, not the competition.
- **Disinterest in durability**: Selling durable, quality products is not in the business interest of companies. Companies profit from purchases, not from use.
		- The subscription model is a business solution to the problem of disinterest in durability.
^
# 360 out-of-scope
* Executing tasks towards a goal initiates a two-way communication between the goal and the world; letting you learn more about the world in doing so.
	* A lack of feedback provokes (a feeling of) helplessness; because you are not gathering new information and so are not progressing. **"Clear results of clear actions enlighten the path."** Only by going for things clearly, do you learn more about the world. (× Decisiveness ([Improvise!]({% link 0-book-review/_posts/2022-12-15-improvise-max-dickins-summary.md %})) (× Failure, [Psycho-Cybernetics]({% link 0-book-review/_posts/2023-08-15-the-new-psycho-cybernetics-summary.md %}), [Improvise!]({% link 0-book-review/_posts/2022-12-15-improvise-max-dickins-summary.md %})), × "All feedback is just information", [Improvise!]({% link 0-book-review/_posts/2022-12-15-improvise-max-dickins-summary.md %}))
* Formulate sub-goals when encountering blocks to your big goal.
- There are always higher goals to your goals; deeper reasons for having set them.
^
* Our (physical) actions and interactions with the world lead to emotions, which is why much of language is based on physical metaphors, whereby we actually refer to the emotions associated with that physical activity.
^
* Multiple minds can be harnessed together to remember things (or wisdom); with each mind contributing complementary pieces (collaborative memory, collaborative wisdom).